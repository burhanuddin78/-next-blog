import bcryptjs from 'bcryptjs';
import clientPromise from '@/app/utils/mongoDBAdapter';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectToDatabase from '@/app/utils/connect';
import { User, Account } from '@/app/models/index';
import { getServerSession } from 'next-auth';

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},

	session: {
		strategy: 'jwt',
		// maxAge: 2 * 60, // 2 minutes in seconds 10 * 24 * 60 * 60,
		maxAge: 10 * 24 * 60 * 60, // 2 minutes in seconds 10 * 24 * 60 * 60,
	},
	debug: process.env.NODE_ENV === 'development',

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name || 'Unknown',
					email: profile.email,
					image: profile.image,
					roles: 'user',
					active: true,
				};
			},
		}),

		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				const formEmail = credentials?.email;
				const formPassword = credentials?.password;

				await connectToDatabase();
				const isUserExist = await User.findOne({
					email: formEmail,
				});

				if (!isUserExist) {
					return null;
				}

				const isValidPassword = await bcryptjs.compare(formPassword, isUserExist?.password);

				if (!isValidPassword) {
					return null;
				}

				return {
					id: isUserExist?._id,
					name: isUserExist?.name || 'anonymous',
					email: isUserExist?.email,
					...isUserExist._doc,
				};
			},
		}),
	],

	callbacks: {
		// acoo{
		// 	providerAccountId: {
		// 	},
		// 	type: "credentials",
		// 	provider: "credentials",
		//   }
		async signIn({ user, account, profile }) {
			await connectToDatabase();

			// Find or create user
			let existingUser = await User.findOne({ email: user.email });

			if (!existingUser) {
				existingUser = await User.create({
					name: user.name || 'Anonymous',
					email: user.email,
					image: user.image,
					lastLoginAt: new Date().toISOString(),
				});
			} else {
				// Update last login date
				existingUser.lastLoginAt = new Date().toISOString();
				await existingUser.save();
			}

			// Store account provider details
			const existingAccount = await Account.findOne({
				provider: account.provider,
				providerAccountId: account.providerAccountId,
			});

			if (!existingAccount) {
				await Account.create({
					provider: account.provider,
					providerAccountId: account.providerAccountId,
					type: account.type,
					access_token: account?.access_token,
					expires_at: account.expires_at ? new Date(account.expires_at * 1000) : null, // Convert seconds to milliseconds
					scope: account?.scope,
					token_type: account?.token_type,
					id_token: account?.id_token,
					userId: existingUser._id,
				});
			}
			return true;
		},

		// Customize JWT token
		async jwt({ token, user, account }) {
			if (user) {
				token.id = user.id;
				token.role = user.role || 'user';
				token.provider = account?.provider || 'email';
			}
			return token;
		},

		// Include JWT fields in the session
		async session({ session, token }) {
			session.user.id = token.id;
			session.user.role = token.role;
			session.user.provider = token.provider;
			return session;
		},
	},
};

export const getAuthSession = () => getServerSession(authOptions);
