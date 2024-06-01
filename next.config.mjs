/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://fakestoreapi.com/api/json/v1/1/:path*",
      },
    ];
  },
};

export default nextConfig;
