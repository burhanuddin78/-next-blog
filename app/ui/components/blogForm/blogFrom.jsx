'use client';

import { useEffect, useState } from 'react';
import { createPost, updatePost, getCategories, getPostById, togglePostPublication } from '@/app/lib/action';
import Image from 'next/image';
import { z } from 'zod';
import ReactQuill from 'react-quill-new';
import { toast, ToastContainer } from 'react-toastify';

import styles from './writePage.module.css';
import 'react-quill-new/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { calculateTimeDifference, TOAST_SETTINGS, MAX_IMAGE_SIZE, ALLOWED_IMAGE_TYPES } from '@/app/ui/helpers/helper';

const modules = {
	toolbar: {
		container: '#toolbar',
	},
};
const formats = [
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'color',
	'background',
	'script',
	'header',
	'blockquote',
	'code-block',
	'indent',
	'list',
	'direction',
	'align',
	'link',
	'image',
	'video',
	'formula',
];
const WritePage = ({ slug }) => {
	const router = useRouter();

	const [previewUrl, setPreviewUrl] = useState(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [categoryOptions, setCategoryOptions] = useState([]);
	const [lastPublishedDate, setLastPublishedDate] = useState(null);
	const [isPublished, setIsPublished] = useState(false);

	const [file, setFile] = useState(null);
	const [errors, setErrors] = useState({});
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		// Fetch categories
		const fetchCategories = async () => {
			try {
				const data = await getCategories();
				setCategoryOptions(data || []);
				if (!category && data.length > 0) setCategory(data[0].id);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		// Fetch post data for editing
		if (slug) {
			const fetchPost = async () => {
				try {
					const { success, data, error } = await getPostById(slug);
					if (success && data) {
						setTitle(data.title);
						setDescription(data.description);
						setCategory(data.category);
						setIsEditMode(true);
						setLastPublishedDate(data.publishedAt);
						setIsPublished(data.isActive);
						if (data.coverImageUrl) {
							setPreviewUrl(`${process.env.NEXT_PUBLIC_MEDIA_URL}${data.coverImageUrl}`);
						}
					} else {
						toast(error || 'Something went wrong!', { ...TOAST_SETTINGS, type: 'error' });
						router.push(`/write`);
					}
				} catch (error) {
					console.error('Error fetching post:', error);
				}
			};
			fetchPost();
		}
	}, [slug]);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files[0];
		setFile(selectedFile);
		setPreviewUrl(URL.createObjectURL(selectedFile));
	};

	const getPostSchema = (isEditMode) =>
		z.object({
			title: z.string().min(5, 'Title must be at least 5 characters long').max(100, 'Title cannot exceed 100 characters'),
			description: z.string().min(10, 'Description must be at least 10 characters long'),
			category: z.string().nonempty('Please select a category'),
			coverImage: isEditMode
				? z
						.instanceof(File)
						.or(z.null()) // Allow null in edit mode
						.refine((file) => file === null || ALLOWED_IMAGE_TYPES.includes(file.type), {
							message: 'Only JPEG and PNG images are allowed',
						})
						.refine((file) => file === null || file.size <= MAX_IMAGE_SIZE, {
							message: `Image must be less than ${MAX_IMAGE_SIZE / (1024 * 1024)} MB`,
						})
				: z
						.instanceof(File)
						.refine((file) => ALLOWED_IMAGE_TYPES.includes(file.type), {
							message: 'Only JPEG and PNG images are allowed',
						})
						.refine((file) => file.size <= MAX_IMAGE_SIZE, {
							message: `Image must be less than ${MAX_IMAGE_SIZE / (1024 * 1024)} MB`,
						}),
		});

	const handleSubmit = async () => {
		const schema = getPostSchema(isEditMode); // Pass the mode dynamically
		const result = schema.safeParse({ title, description, category, coverImage: file });
		if (result.success) {
			const toastId = toast('Please wait...', {
				isLoading: true,
				...TOAST_SETTINGS,
			});

			try {
				let res;
				if (isEditMode) {
					if (!result.data.coverImage) {
						delete result.data.coverImage;
					}

					res = await updatePost(slug, result.data);
				} else {
					res = await createPost(result.data);
				}

				if (!res?.success) {
					toast.update(toastId, { render: res?.message || 'Something went wrong', type: 'error', isLoading: false });
				} else {
					toast.update(toastId, { render: isEditMode ? 'Post updated successfully!' : 'Post created successfully!', type: 'success', isLoading: false });

					if (isEditMode && res.data.slug !== slug) {
						router.push(`/write/${res.data.slug}/edit`);
					} else if (!isEditMode) {
						router.push(`/write/${res.data.slug}/edit`);
					}
				}
			} catch (err) {
				console.error(err);
				toast.update(toastId, { render: isEditMode ? 'Error updating post:' : 'Error creating post:', type: 'error', isLoading: false });
			}
		} else {
			setErrors(result.error.flatten().fieldErrors);
			toast('Validation Errors', { ...TOAST_SETTINGS, type: 'error' });
		}
	};

	const handlePublish = async () => {
		const { success, message } = await togglePostPublication(slug);

		if (success) {
			toast(message, { type: 'success' });
			setIsPublished(!isPublished);
		} else {
			toast(message, { type: 'error' });
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{isEditMode ? 'Edit Post' : 'Create a Post'}</h1>

			{/* Last Published Date */}
			{isEditMode && lastPublishedDate && (
				<div style={{ marginBottom: '20px', fontStyle: 'italic', color: '#666' }}>
					<p>Last Published: {calculateTimeDifference(lastPublishedDate)}</p>
				</div>
			)}

			<div className={styles.field}>
				<label
					htmlFor='category'
					className={styles.label}>
					Category
				</label>
				<select
					id='category'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					className={styles.select}>
					<option value=''>Select a category</option>
					{categoryOptions.map((opt) => (
						<option
							key={opt.id}
							value={opt.id}>
							{opt.title}
						</option>
					))}
				</select>
				{errors.category && <p className={styles.validationError}>{errors.category[0]}</p>}
			</div>

			<div className={styles.field}>
				<label
					htmlFor='title'
					className={styles.label}>
					Title
				</label>
				<input
					id='title'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Enter post title'
					className={styles.input}
				/>
				{errors.title && <p className={styles.validationError}>{errors.title[0]}</p>}
			</div>

			<div className={styles.field}>
				<label
					htmlFor='description'
					className={styles.label}>
					Description
				</label>
				<ReactQuill
					id='description'
					theme='bubble'
					value={description}
					onChange={setDescription}
					placeholder='Tell your story...'
					className={styles.editor}
				/>
				{errors.description && <p className={styles.validationError}>{errors.description[0]}</p>}
			</div>

			<div className={styles.field}>
				<label
					htmlFor='coverImage'
					className={styles.label}>
					Cover Image
				</label>
				<input
					id='coverImage'
					type='file'
					onChange={handleFileChange}
					className={styles.fileInput}
				/>
				{errors.coverImage && <p className={styles.validationError}>{errors.coverImage[0]}</p>}
				{previewUrl && (
					<div className={styles.preview}>
						<Image
							src={previewUrl}
							alt='Cover preview'
							width={600}
							height={350}
						/>
					</div>
				)}
			</div>

			<div style={{ display: 'flex', gap: '10px' }}>
				<button
					onClick={handleSubmit}
					className={styles.button}>
					{isEditMode ? 'Update' : 'Save'}
				</button>

				{isEditMode && (
					<button
						onClick={handlePublish}
						className={isPublished ? styles.unpublish : styles.publish}>
						{isPublished ? 'Unpublish' : 'Publish'}
					</button>
				)}
			</div>

			<ToastContainer />
		</div>
	);
};

export default WritePage;
