/** @type {import('next').NextConfig} */

// dns.setDefaultResultOrder('ipv4first');
const nextConfig = {
  images: {
    domains: ["localhost", "192.168.0.171", "api.dazzle.com.bd"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.dazzle.com.bd",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dazzle.com.bd",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.0.171",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "sandbox.sslcommerz.com",
        "https://sandbox.sslcommerz.com",
        "securepay.sslcommerz.com",
        "https://securepay.sslcommerz.com",
        "api.dazzle.com.bd",
        "dazzle.com.bd",
      ],
    },
  },
};

export default nextConfig;
