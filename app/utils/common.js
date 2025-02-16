import sharp from 'sharp';

export const slugify = (title) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

export async function resizeImage(buffer) {
	return await sharp(buffer).resize(1200, 628).toFormat('jpeg').jpeg({ quality: 90 }).toBuffer();
}

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
