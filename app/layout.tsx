'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { useEffect, Suspense } from 'react';
import { AuthProvider } from '../context/AuthContext';
const inter = Inter({ subsets: ['latin'] });

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
					<Link href='/dashboard'> Dashboard</Link>
				</header>

				{/* <input type='text' placeholder='yaya' />  */}
				<AuthProvider>
					<Suspense>{children}</Suspense>
				</AuthProvider>
			</body>
		</html>
	);
}
