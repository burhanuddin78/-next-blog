import Navbar from '@/app/ui/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/ui/components/footer/Footer';
import { ThemeContextProvider } from '@/app/ui/components/context/ThemeContext';
import ThemeProvider from '@/app/ui/providers/ThemeProvider';
import AuthProvider from '@/app/ui/providers/AuthProvider';
import ProgressBarProviders from '@/app/ui/providers/ProgressBarProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'AIStory Heaven – The Ultimate Blog App',
	description: 'Explore nightly AI-generated stories and unleash your imagination!',

	openGraph: {
		title: 'AIStory Heaven – The Ultimate Blog App',
		description: 'Discover how our AI-powered blog delivers fresh content daily across various topics.',
		url: process.env.NEXT_PUBLIC_SITE_URL,
		siteName: 'Your Blog Name',
		images: [{ url: 'https://www.aistoryheaven.fun/logo.png' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'AIStory Heaven – The Ultimate Blog App',
		description: 'AI-powered blog with daily updates.',
		image: 'https://www.aistoryheaven.fun/logo.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<meta
				name='google-site-verification'
				content='iHh_qM_M9WquhHuYHzEorJW7dSauPD0k_6tQoi21lXA'
			/>
			<body
				className={inter.className}
				suppressHydrationWarning={true}>
				<ProgressBarProviders>
					<AuthProvider>
						<ThemeContextProvider>
							<ThemeProvider>
								<div className='container'>
									<div className='wrapper'>
										<Navbar />
										{children}
										<Footer />
									</div>
								</div>
							</ThemeProvider>
						</ThemeContextProvider>
					</AuthProvider>
				</ProgressBarProviders>
			</body>
		</html>
	);
}
