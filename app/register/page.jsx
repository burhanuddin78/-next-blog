import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/authOptions';
import { redirect } from 'next/navigation';
import RegisterForm from '@/app/ui/components/registerForm';

export default async function LoginPage() {
	const session = await getServerSession(authOptions);

	// Redirect authenticated users
	if (session) {
		redirect('/');
	}

	return (
		<div>
			<RegisterForm />
		</div>
	);
}
