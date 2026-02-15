/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from '@module-federation/nextjs-mf'; 

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

    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        );

           config.plugins.push(
               new NextFederationPlugin({
                   name: 'CRM', 
                   filename: 'static/chunks/remoteEntry.js',
                   remotes: {
                    
                       dashboard: `dashboard@http://localhost:3001/static/chunks/remoteEntry.js`,
                      
                   },
                   shared: {
                    
                   },
                   extraOptions: {
                       enableImageLoaderFix: true, 
                       enableUrlLoaderFix: true,    
                       exposePages: true
                   },
               })
           );
        return config;
    },
};


export default nextConfig;
