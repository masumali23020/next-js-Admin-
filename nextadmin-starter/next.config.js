/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'media.istockphoto.com'  // Use a single string instead of an array
            },
            {
                protocol: "https",
                hostname: 'plus.unsplash.com'  // Add another object if needed
            }
        ]
    },
};


module.exports = nextConfig
