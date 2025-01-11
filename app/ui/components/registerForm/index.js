'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './registerForm.module.css';
import { userRegisterAction } from '@/app/lib/action';

export default function RegisterForm() {
	const [formData, setFormData] = useState({ username: '', email: '', password: '' });
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);
	const router = useRouter();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { username, email, password } = formData;

		// Basic client-side validation
		if (!username || !email || !password) {
			setError('All fields are required.');
			return;
		}

		try {
			setLoading(true);
			// Call the server action
			const result = await userRegisterAction({ username, email, password });
			setLoading(false);

			if (result.success) {
				router.push('/login'); // Redirect to home
			} else {
				setError(result.message || 'Registration failed. Please try again.');
			}
		} catch (err) {
			setLoading(false);
			setError('An error occurred. Please try again.');
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signIn('google');
		} catch (err) {
			setError('Google sign-in failed. Please try again.');
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Register</h1>
				<form onSubmit={handleSubmit}>
					{error && <p className={styles.error}>{error}</p>}
					<div className={styles.formGroup}>
						<input
							className={styles.input}
							type='text'
							placeholder='User name'
							name='username'
							value={formData.username}
							onChange={handleChange}
							aria-label='Enter your username'
							required
							autoComplete='false'
						/>
					</div>
					<div className={styles.formGroup}>
						<input
							className={styles.input}
							type='email'
							placeholder='Email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							aria-label='Enter your email address'
							required
							autoComplete='false'
						/>
					</div>
					<div className={styles.formGroup}>
						<input
							className={styles.input}
							type='password'
							placeholder='Password'
							name='password'
							value={formData.password}
							onChange={handleChange}
							aria-label='Enter your password'
							required
							minLength={6}
						/>
					</div>
					<button
						type='submit'
						className={styles.button}
						disabled={isLoading}>
						{isLoading ? 'Registering...' : 'Register'}
					</button>
					<Link href='/login'>
						<p className={styles.register}>Already have an account?</p>
					</Link>
				</form>
				<div className={styles.divider}>or</div>
				<div
					className={styles.socialButton}
					onClick={handleGoogleSignIn}>
					Sign in with Google
				</div>
			</div>
		</div>
	);
}
