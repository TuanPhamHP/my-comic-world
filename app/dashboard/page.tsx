// ~/app/products/page.tsx
'use client';
import { useEffect } from 'react';
import withAuth from '@/hoc/withAuth';
function Page() {
	useEffect(() => {
		console.log('render from layouts');
	});
	// const makeError = () => {
	// 	console.log(error);
	// };
	// makeError();
	return (
		<div>
			<h1>Hello, ProductPage Work!</h1>
			<button className='btn bg-red-500 text-white rounded px-3 py-1'>Check mate</button>
		</div>
	);
}

export default withAuth(Page);
