import CustomHead from '@/components/Head';
import Layout from '@/components/Layout';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'M. Aktaruzzaman Joti',
	description: 'Full Stack Software Engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Layout>
					<CustomHead title={`M. Aktaruzzaman Joti `} />
					{/* <Component {...pageProps} /> */}
					{children}
				</Layout>
			</body>
		</html>
	);
}
