import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'countries-list - Project by Cosmin',
	description: '<3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<div className='xl:max-w-6xl mx-auto'>
					<div className='mx-8'>
						<Navbar />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
