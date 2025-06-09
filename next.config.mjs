/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/new',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/orders',
                permanent: true,
            },

          /*   {
                source: '/orders/order_detail',
                destination: '/orders',
                permanent: true,
            }, */
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

   /*  experimental: {
        nextScriptWorkers: true,
    }, */
};


export default nextConfig;
