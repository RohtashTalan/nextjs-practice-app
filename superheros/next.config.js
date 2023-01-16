/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/SUPERHERO_NEXTJS_APP"
  }
}

module.exports = nextConfig
