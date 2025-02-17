import { Post, Category } from '@/app/models';
import { resizeImage, slugify } from '@/app/utils/common';
import connectToDatabase from '@/app/utils/connect';
import { uploadToS3 } from '@/app/utils/s3';
import { generateBlog, generateImage } from '@/app/utils/assistanceService';

export async function GET(req, res) {
	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return Response.json({ success: false, message: 'Unauthorized' }, { status: 401 });
	}

	try {
		await generatePosts();
		return Response.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Error in GET /posts:', error);
		return Response.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
	}
}

async function generatePosts() {
	await connectToDatabase();

	const categories = await Category.find().lean();
	for (const category of categories) {
		try {
			const blog = await generateBlog(category.title);
			if (!blog || !blog.title || !blog.description) {
				console.warn(`Skipping category "${category.title}" due to invalid blog response.`);
				continue;
			}

			const coverImage = await generateImage(blog.title);
			if (!coverImage || !coverImage.bufferImage) {
				console.warn(`Skipping blog "${blog.title}" due to invalid image response.`);
				continue;
			}

			await createPost({
				title: blog.title,
				description: blog.description,
				category: category._id.toString(),
				coverImage,
			});
		} catch (error) {
			console.error(`Error generating post for category "${category.title}":`, error);
		}
	}
}

async function createPost({ title, description, category, coverImage }) {
	let slug = slugify(title);
	let attempt = 0;
	let post = null;

	// Ensure unique slug
	while (await Post.findOne({ slug })) {
		attempt++;
		slug = `${slug}-${attempt}`;
		if (attempt > 5) {
			console.warn(`Skipping post "${title}" due to duplicate slug.`);
			return null;
		}
	}

	try {
		const newPost = {
			slug,
			title,
			description,
			category,
			user: process.env.DEFAULT_USER_ID || '678243de1c19194d55573eb8',
			publishedAt: new Date(),
		};

		post = await Post.create(newPost);
		if (!post) {
			console.error(`Failed to create post: ${title}`);
			return { success: false, message: 'Failed to create post' };
		}

		// Image Upload Handling
		if (!coverImage || !coverImage.bufferImage) {
			console.warn(`Skipping image upload for "${title}" due to invalid cover image.`);
			return post;
		}

		const bucketName = process.env.AWS_S3_BUCKET_NAME;
		const folder = 'blog-covers';
		const mime = coverImage.contentType || 'image/jpeg';
		let extension = mime.split('/')[1].replace('+xml', ''); // Handle svg+xml

		const key = `${Date.now()}-${post._id.toString()}.${extension}`;
		const buffer = coverImage.bufferImage;
		const resizedBuffer = await resizeImage(Buffer.from(buffer));

		const uploadedImageUrl = await uploadToS3(resizedBuffer, bucketName, `${folder}/${key}`);
		if (!uploadedImageUrl) {
			console.error(`Image upload failed for "${title}".`);
			return post;
		}

		// Save the uploaded image key
		post.coverImage = key;
		await post.save();

		return post;
	} catch (error) {
		console.error(`Error creating post "${title}":`, error);

		if (post && post._id) {
			await Post.deleteOne({ _id: post._id.toString() });
		}

		return null;
	}
}
