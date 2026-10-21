import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    cacheComponents: true,
    partialPrefetching: true,
    experimental: {
        agentFeedback: true,
    },
};

export default nextConfig;
