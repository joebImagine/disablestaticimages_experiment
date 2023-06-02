const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...withImages(),
  reactStrictMode: true,
    swcMinify: true,
    images: {
      disableStaticImages: true,
  }
}

module.exports = nextConfig
