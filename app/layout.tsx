import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<header className='flex py-3 bg-slate-200 gap-4'>
					<Link href='/'> Home</Link>
					<Link href='/products'> Product</Link>
					<p>Hi, im header from root layout</p>
				</header>

				{/* <input type='text' placeholder='yaya' />  */}
				{children}
			</body>
		</html>
	);
}
