/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // output: "standalone"
})

export default nextConfig
