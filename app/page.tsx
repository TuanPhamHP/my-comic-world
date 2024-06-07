import Image from 'next/image';
import Card from '../components/Card';
import AnotherCard from '../components/AnotherCard';

export default async function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1> Hi, I&apos;m Homepage</h1>
			<AnotherCard />
			<Card />
		</main>
	);
}
