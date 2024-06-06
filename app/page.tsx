import Image from 'next/image';
import Card from '../components/Card';
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1> Hi, I&apos;m Homepage</h1>
			<Card />
		</main>
	);
}
