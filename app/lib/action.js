'use server';

import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/connect';
import { Category, User } from '@/app/models/index';
import connectToDatabase from '@/app/utils/connect';

// export async function userRegisterAction({ username, email, password }) {
// 	if (!username || !email || !password) {
// 		throw new Error('Username, Email and password are required');
// 	}

// 	const existingUser = await User.findOne({ email });
// 	if (existingUser) {
// 		throw new Error('Email already in use');
// 	}

// 	const hashedPassword = await bcrypt.hash(password, 12);

// 	const newUser = {
// 		username,
// 		email,
// 		password: hashedPassword,
// 		isAdmin: false,
// 		isActive: true,
// 		createdAt: new Date(),
// 	};

// 	await User.create(newUser);

// 	return { success: true, message: 'User registered successfully' };
// }

export async function userRegisterAction({ username, email, password }) {
	try {
		await dbConnect();

		// Validation
		if (!username || !password || !email) {
			throw new Error('Username, Email and password are required');
		}

		// check if the user is existing
		const isUserExist = await User.findOne({ email });
		console.log('isUserExist', isUserExist);
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

export async function GetCategories() {
	await connectToDatabase();

	const activeCategories = await Category.find({ isActive: true }).lean();
	return activeCategories;
}
