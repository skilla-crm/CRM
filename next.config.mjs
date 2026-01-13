/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/orders',
                permanent: true,
            },
        ]
    },

  /*   async rewrites() {
        return [
            {
                source: '/orders1',
                destination: `http://react.skilla.ru/lexa.html`,
            },
        ]

    }, */
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
