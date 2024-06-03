// pages/error.tsx
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ErrorPage = () => {
	const router = useRouter();
	const [errorCode, setErrorCode] = useState<number | null>(null);
	const searchParams = useSearchParams();

	useEffect(() => {
		if (searchParams.get('code')) {
			setErrorCode(parseInt(searchParams.get('code') as string, 10));
		}
	}, [searchParams.get('code')]);

	const getErrorMessage = (code: number | null) => {
		switch (code) {
			case 401:
				return '401 - Unauthorized: You do not have permission to access this page.';
			default:
				return 'An unexpected error has occurred.';
		}
	};

	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<h1 className='text-2xl font-bold'>Error</h1>
			<p>{getErrorMessage(errorCode)}</p>
		</div>
	);
};

export default ErrorPage;
