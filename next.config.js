/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['d2gyiv7g58gjn4.cloudfront.net'], // Replace with your CloudFront domain
	},
};

module.exports = nextConfig;
