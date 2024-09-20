/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "pm-s3-images.s3.us-east-2.amazonaws.com" }],
  },
};

export default nextConfig;
