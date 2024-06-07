'use client';
import { useEffect } from 'react';
export default function Home({ data }: { data?: any[] }) {
	const getData = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_POSTMAN_MOCK}/api/me`);
		// The return value is *not* serialized
		// You can return Date, Map, Set, etc.

		if (!res.ok) {
			// This will activate the closest `error.js` Error Boundary
			throw new Error('Failed to fetch data');
		}
		return res.json();
	};

	useEffect(() => {
		(async () => {
			const x = await getData();
			console.log(x);
		})();
	});
	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
}
