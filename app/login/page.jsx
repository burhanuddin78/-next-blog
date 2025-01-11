import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/authOptions';
import { redirect } from 'next/navigation';
import LoginForm from '@/app/ui/components/loginForm';

export default async function LoginPage() {
	const session = await getServerSession(authOptions);

	// Redirect authenticated users
	if (session) {
		redirect('/');
	}

	return (
		<div>
			<LoginForm />
		</div>
	);
}
