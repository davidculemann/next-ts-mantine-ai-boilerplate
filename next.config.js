/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    async redirects() {
        return [
            {
                source: "/app/:path*",
                destination: "/signin",
                permanent: false,
                has: [
                    {
                        type: "cookie",
                        key: "authenticated",
                        value: "false",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
