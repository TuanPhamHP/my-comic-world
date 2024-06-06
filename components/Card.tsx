import { sql } from '@vercel/postgres';
export default async function Home({ data }: { data?: any[] }) {
	// Thực hiện công việc gì đó với dữ liệu từ cơ sở dữ liệu
	const { rows, fields } = await sql`SELECT * FROM users`;

	return (
		<div>
			<h1>Hello World</h1>
			{rows.map(o => (
				<p key={o.id}>{o.name}</p>
			))}
		</div>
	);
}
