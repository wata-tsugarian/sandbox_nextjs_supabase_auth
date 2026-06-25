import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 開発時、127.0.0.1 経由のアクセスでも HMR（ホットリロード）等の
  // 開発リソースを許可する。これが無いと変更がブラウザに反映されない。
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
