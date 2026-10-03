import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/images/youth/soda-sanctuary/logo.png", search: "?v=20260930200343" },
      { pathname: "/images/youth/soda-sanctuary/hero.png", search: "?v=20260930204509" },
      { pathname: "/images/youth/soda-sanctuary/menu.png", search: "?v=20260930200603" },
    ],
  },
};

export default nextConfig;
