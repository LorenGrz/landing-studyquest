/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static site — deployed to GitHub Pages via Actions
  images: { unoptimized: true }, // next/image optimization needs a server; static export has none
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? '/landing-studyquest' : '',
};

module.exports = nextConfig;
