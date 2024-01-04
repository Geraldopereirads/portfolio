/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ["image/webp"]
  }
}

module.exports = nextConfig
