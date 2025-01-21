import React from 'react';
import BlogForm from '@/app/ui/components/blogForm/blogFrom';
// import { getAuthSession } from '../utils/authOptions';
// import { redirect } from 'next/navigation';

async function WritePage() {
	// const session = await getAuthSession();

	// if (!(session && session.user && session.user.id)) {
	// 	redirect('/');
	// 	return;
	// }
	return (
		<div>
			<BlogForm />
		</div>
	);
}

export default WritePage;
