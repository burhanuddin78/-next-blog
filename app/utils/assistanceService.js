import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import prompts from '@/app/utils/prompts';

// const client = new OpenAI({
// 	baseURL: 'https://api.deepseek.com',
// 	apiKey: process.env.DEEPSEEK_API_KEY,
// });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generateBlog = async (category) => {
	// const prompt = `Write a detailed blog post in the category of "${category}" with an engaging title, proper headings, and a conclusion.`;

	// const response = await client.chat.completions.create({
	// 	model: 'gpt-4o-mini-2024-07-18s',
	// 	messages: [
	// 		{
	// 			role: 'user',
	// 			content: prompt,
	// 		},
	// 	],
	// 	temperature: 1,
	// 	max_tokens: 1024,
	// 	top_p: 1,
	// });

	// return response.data.choices[0].text.trim();

	try {
		// Check if category exists
		if (!category || !prompts[category]) {
			throw new Error(`Invalid category: ${category}`);
		}

		// Get prompt and validate
		const prompt = prompts[category];
		if (!prompt || typeof prompt !== 'string') {
			throw new Error('Invalid prompt format');
		}

		// Generate content with timeout
		const result = await Promise.race([
			model.generateContent(prompt),
			new Promise((_, reject) => setTimeout(() => reject(new Error('Generation timeout')), 30000)),
		]);

		// Validate result
		if (!result?.response) {
			throw new Error('Invalid response from model');
		}

		// Clean and parse response
		const text = result.response.text();
		if (!text) {
			throw new Error('Empty response from model');
		}

		// Remove markdown and notes
		const cleanResponse = text.replace(/```json\n|\n```|\*\*Note:.+/gs, '');

		// Validate JSON structure
		try {
			const jsonObject = JSON.parse(cleanResponse);

			// Validate expected properties
			if (!jsonObject.title || !jsonObject.description) {
				throw new Error('Missing required properties in JSON');
			}

			// Validate property types
			if (typeof jsonObject.title !== 'string' || typeof jsonObject.description !== 'string') {
				throw new Error('Invalid property types in JSON');
			}

			return jsonObject;
		} catch (parseError) {
			throw new Error(`JSON parsing failed: ${parseError.message}`);
		}
	} catch (error) {
		// Log error for debugging
		console.error('Generation mechanism error:', error);

		// Return a structured error object
		return {
			error: true,
			message: error.message,
			details: error.stack,
		};
	}
};

const generateImage = async (title) => {
	try {
		// First attempt: Call the primary API
		const response = await axios.post(
			`https://ai-girl.site/api/workerai`,
			{ prompt: `${title}` },
			{ responseType: 'arraybuffer' }, // Correctly placed
		);

		const imageData = Buffer.from(response.data); // Convert to Buffer
		const contentType = response.headers['content-type']; // Get MIME type

		return { bufferImage: imageData, contentType: contentType };
	} catch (primaryApiError) {
		try {
			const unsplashResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${title}&per_page=1`, {
				headers: {
					Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`, // Corrected Authorization header
				},
			});

			const image = unsplashResponse.data.results[0]?.urls?.regular || null;

			if (image) {
				const bufferImageResponse = await axios.get(image, { responseType: 'arraybuffer' });

				return {
					bufferImage: Buffer.from(bufferImageResponse.data), // Convert to Buffer
					contentType: bufferImageResponse.headers['content-type'], // Extract specific header
				};
			}

			return null;
		} catch (unsplashError) {
			return null;
		}
	}
};

export { generateBlog, generateImage };
