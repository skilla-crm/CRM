/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/new',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },

            {
                source: '/orders/order_detail',
                destination: '/orders',
                permanent: true,
            },
        ]
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        );
        return config;
    },
};


export default nextConfig;
