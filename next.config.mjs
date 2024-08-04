/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/disign-galina",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
