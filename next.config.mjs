/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "portfolio-repository.s3.us-east-2.amazonaws.com",
                pathname: "**",
            },
        ]
    },
};

export default nextConfig;
