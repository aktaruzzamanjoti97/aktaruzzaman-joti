import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			'res.cloudinary.com',
			'avatars.githubusercontent.com',
			'imgur.com',
			'media2.dev.to',
		],
	},
};

export default nextConfig;
