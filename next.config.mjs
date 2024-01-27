/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"http",
                hostname:"image.tmdb.org"
            },
            {
                protocol:"https",
                hostname:"links.papareact.com"
            },
            {
                protocol:"https",
                hostname:"img.youtube.com"
            }
        ]
    }
};

export default nextConfig;
