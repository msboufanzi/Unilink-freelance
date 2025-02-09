/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: process.env.NODE_ENV !== "production",
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === "production" ? "https" : "http",
        hostname:
          process.env.NODE_ENV === "production"
            ? "https://unilink-freelance.onrender.com"
            : "https://unilink-freelance.onrender.com",
        port: process.env.NODE_ENV === "production" ? "" : "5001",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
