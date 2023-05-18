/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
            'unsplash.com',
            'randomuser.me', 
            'dreamstime.com',
            'pixabay.com',
            'cdn.pixabay.com',
            'i.postimg.cc',
            'images.pexels.com/photos/'
        ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.vercel.com',
            port: '',
            pathname: '/image/upload/**',
          },
        ],
      },
    
}

module.exports = nextConfig
