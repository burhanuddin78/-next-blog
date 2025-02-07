'use client';
import React, { useState } from 'react';
import styles from './write.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const WritePage = () => {
	const { status } = useSession();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	if (status === 'loading') {
		return <div className={styles.loading}>Loading...</div>;
	}

	if (status !== 'authenticated') {
		router.push('/');
	}
	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder='Title'
				className={styles.input}
			/>

			<div className={styles.editor}>
				<button className={styles.button}>
					<Image
						src='/plus.png'
						alt='plus'
						height={16}
						width={16}
						onClick={() => setOpen(!open)}
					/>
				</button>

				{open && (
					<div className={styles.add}>
						<button className={styles.addButton}>
							<Image
								src='/image.png'
								alt='image'
								height={16}
								width={16}
							/>
						</button>
						<button className={styles.addButton}>
							<Image
								src='/external.png'
								alt='external'
								height={16}
								width={16}
							/>
						</button>
						<button className={styles.addButton}>
							<Image
								src='/video.png'
								alt='video'
								height={16}
								width={16}
							/>
						</button>
					</div>
				)}

				<ReactQuill
					className={styles.textArea}
					theme='bubble'
					value={value}
					onChange={setValue}
					placeholder='Tell your story....'
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	);
};

export default WritePage;
