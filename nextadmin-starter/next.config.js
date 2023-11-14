/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "media.istockphoto.com"
            }
        ]
    },
   
}

module.exports = nextConfig
