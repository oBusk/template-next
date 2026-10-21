import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    cacheComponents: true,
    partialPrefetching: true,
    experimental: {
        agentUpgrade: "latest",
    },
};

export default nextConfig;
