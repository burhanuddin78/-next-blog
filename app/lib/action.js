'use server';

import bcryptjs from 'bcryptjs';
import { Category, User, Post } from '@/app/models/index';
import connectToDatabase from '@/app/utils/connect';
import { getAuthSession } from '../utils/authOptions';
import { resizeImage, slugify, MAX_FILE_SIZE } from '../utils/common';
import { uploadToS3 } from '../utils/s3';

import { revalidatePath } from 'next/cache';

export async function userRegisterAction({ username, email, password }) {
	try {
		await connectToDatabase();

		// Validation
		if (!username || !password || !email) {
			throw new Error('Username, Email and password are required');
		}

		// check if the user is existing
		const isUserExist = await User.findOne({ email });
		// Validation
		if (isUserExist) {
			throw new Error('Email already in use');
		}

		// generate salt
		const salt = await bcryptjs.genSalt(10);
		// convert password to hashed password
		const hashedPassword = await bcryptjs.hash(password, salt);
		// store to the database

		const newUser = await new User({ name: username, email, password: hashedPassword, active: true }).save();

		return { success: true, message: 'User registered successfully' };
	} catch (error) {
		return { success: false, message: error?.message };
	}
}

export async function getCategories() {
	await connectToDatabase();

	const activeCategories = await Category.find({ isActive: true }).lean();
	const transformedCategories = activeCategories.map((category) => {
		return {
			id: category._id.toString(), // Convert ObjectId to string
			title: category.title,
			image: category.image,
			color: category.color,
		};
	});

	return transformedCategories;
}

export async function createPost({ title, description, category, coverImage }) {
	await connectToDatabase();
	const session = await getAuthSession();

	if (!(session && session.user && session.user.id)) {
		return { success: false, message: 'Not Authenticated!' };
	}

	const slug = slugify(title);
	const isUnique = await Post.findOne({ slug });

	if (isUnique) {
		return { success: false, message: 'Title is not available!' };
	}

	if (coverImage.size > MAX_FILE_SIZE) {
		return { success: false, message: 'File size exceeds the allowed limit' };
	}

	try {
		const newPost = {
			slug,
			title,
			description,
			category,
			user: session.user.id,
			publishedAt: new Date(),
		};
		const post = await Post.create(newPost);

		if (!post) {
			return { success: false, message: 'Something went wrong' };
		}

		const bucketName = process.env.AWS_S3_BUCKET_NAME;
		const folder = 'blog-covers';
		const mime = coverImage.type;
		const extension = mime.split('/')[1];
		const key = `${Date.now()}-${post._id.toString()}.${extension}`;

		const buffer = await coverImage.arrayBuffer();
		const resizedBuffer = await resizeImage(Buffer.from(buffer));
		const uploadedImageUrl = await uploadToS3(resizedBuffer, bucketName, `${folder}/${key}`);

		post.coverImage = key;
		await post.save();

		return { success: true, message: 'Post created successfully', data: newPost };
	} catch (error) {
		console.error('Error creating post:', error);
		return { success: false, message: error?.message || 'An unexpected error occurred' };
	}
}

export async function updatePost(slug, { title, description, category, coverImage }) {
	await connectToDatabase();
	const session = await getAuthSession();

	if (!(session && session.user && session.user.id)) {
		return { success: false, message: 'Not Authenticated!' };
	}

	if (!title || !description || !category) {
		return { success: false, message: 'Required fields are missing' };
	}

	const post = await Post.findOne({ slug });

	if (!post) {
		return { success: false, message: 'Invalid Slug' };
	}

	let newSlug = slug;
	if (post.title !== title) {
		newSlug = slugify(title);
		const isUnique = await Post.findOne({ slug: newSlug });
		if (isUnique) {
			return { success: false, message: 'Title is not available!' };
		}
	}

	if (coverImage) {
		if (coverImage.size > MAX_FILE_SIZE) {
			return { success: false, message: 'File size exceeds the allowed limit' };
		}
		if (!['image/jpeg', 'image/png', 'image/webp'].includes(coverImage.type)) {
			return { success: false, message: 'Invalid image type' };
		}
	}

	const updatePost = {
		slug: newSlug,
		title,
		description,
		category,
		publishedAt: new Date(),
	};

	try {
		const updatedPost = await Post.findOneAndUpdate({ slug }, { $set: updatePost }, { runValidators: true, new: true });

		if (!updatedPost) {
			return { success: false, message: 'Failed to update post' };
		}

		if (coverImage) {
			const bucketName = process.env.AWS_S3_BUCKET_NAME;
			const folder = 'blog-covers';
			const mime = coverImage.type;
			const extension = mime.split('/')[1];
			const key = `${Date.now()}-${updatedPost._id.toString()}.${extension}`;

			const buffer = await coverImage.arrayBuffer();
			const resizedBuffer = await resizeImage(Buffer.from(buffer));
			const uploadedImageUrl = await uploadToS3(resizedBuffer, bucketName, `${folder}/${key}`);

			updatedPost.coverImage = key;
			await updatedPost.save();
		}
		return { success: true, message: 'Post updated successfully', data: updatePost };
	} catch (error) {
		console.error('Error updating post:', error);
		return { success: false, message: error.message || 'An unexpected error occurred' };
	}
}

export async function getPostById(slug) {
	await connectToDatabase();

	// Validation
	if (!slug) {
		return { success: false, error: 'Invalid Request' };
	}

	// check if the blog is existing
	const post = await Post.findOne({ slug }).lean();
	// Validation
	if (!post) {
		return { success: false, error: 'Blog Not Found' };
	}

	return {
		success: true,
		data: {
			id: post._id.toString(), // Convert ObjectId to string
			slug: post.slug,
			title: post.title,
			description: post.description,
			coverImageUrl: post.coverImage,
			category: post.category.toString(),
			publishedAt: new Date(post.publishedAt),
			isActive: post.isActive,
		},
	};
}

export async function togglePostPublication(slug) {
	try {
		// Validation for input
		if (!slug) {
			return { success: false, error: 'Slug is required.' };
		}

		// Check if the blog post exists
		const post = await Post.findOne({ slug });
		if (!post) {
			return { success: false, error: `Blog post with slug "${slug}" not found.` };
		}

		// Toggle the isActive status
		post.isActive = !post.isActive;
		if (post.isActive) {
			post.publishedAt = new Date();
		}
		await post.save();

		revalidatePath(`/write/${post.slug}/edit`);

		return { success: true, message: `Blog successfully ${post.isActive ? 'published' : 'unpublished'}.` };
	} catch (error) {
		// Log the error for debugging
		console.error('Error toggling post publication:', error);
		return { success: false, error: 'An error occurred while toggling the publication status.' };
	}
}
