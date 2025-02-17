import React from 'react';
import BlogForm from '@/app/ui/components/blogForm/blogFrom';

import { redirect } from 'next/navigation';
import { getAuthSession } from '@/app/utils/authOptions';

async function EditPage(props) {
	const session = await getAuthSession();

	if (!(session && session.user && session.user.id)) {
		redirect('/login');
		return;
	}

	const params = await props.params;
	const slug = params.slug;

	return (
		<div>
			<BlogForm slug={slug} />
		</div>
	);
}

export default EditPage;
