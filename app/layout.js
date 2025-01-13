import Navbar from '@/app/ui/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/ui/components/footer/Footer';
import { ThemeContextProvider } from '@/app/ui/components/context/ThemeContext';
import ThemeProvider from '@/app/ui/providers/ThemeProvider';
import AuthProvider from '@/app/ui/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'AIStory Heaven – The Ultimate Blog App',
	description: 'Explore nightly AI-generated stories and unleash your imagination!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={inter.className}
				suppressHydrationWarning={true}>
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
			</body>
		</html>
	);
}
