/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.vecteezy.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'cdni.iconscout.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
