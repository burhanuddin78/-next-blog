import React from 'react';
import BlogForm from '@/app/ui/components/blogForm/blogFrom';

async function EditPage(props) {
	const params = await props.params;
	const slug = params.slug;

	return (
		<div>
			<BlogForm slug={slug} />
		</div>
	);
}

export default EditPage;
