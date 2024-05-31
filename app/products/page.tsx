// ~/app/products/page.tsx
'use client';
import { useEffect } from 'react';
export default function Page() {
	useEffect(() => {
		console.log('render from layouts');
	});
	const makeError = () => {
		console.log(error);
	};
	makeError();
	return (
		<div>
			<h1>Hello, ProductPage Work!</h1>
			<button className='btn bg-red-500 text-white rounded px-3 py-1' onClick={makeError}>
				Check mate
			</button>
		</div>
	);
}
