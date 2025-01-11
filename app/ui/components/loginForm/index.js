'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import styles from './loginForm.module.css';
import Link from 'next/link';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic client-side validation
		if (!email || !password) {
			setError('All fields are required.');
			return;
		}

		// Attempt to sign in using NextAuth
		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});

		if (!result?.ok) {
			setError('Invalid credentials. Please try again.');
		} else {
			setError('');
			window.location.href = '/'; // Redirect to home
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Login</h1>
				<form onSubmit={handleSubmit}>
					{error && <p className={styles.error}>{error}</p>}
					<div className={styles.formGroup}>
						<input
							className={styles.input}
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className={styles.formGroup}>
						<input
							className={styles.input}
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type='submit'
						className={styles.button}>
						Sign In
					</button>
					<Link href='/register'>
						<p className={styles.register}>Don&apos;t have an account yet? Sign Up</p>
					</Link>
				</form>
				<div className={styles.divider}>or</div>

				<div
					className={styles.socialButton}
					onClick={() => signIn('google')}>
					Sign in with Google
				</div>
			</div>
		</div>
	);
}
