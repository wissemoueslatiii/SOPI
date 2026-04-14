/// <reference types="vite/client" />

interface BuildInfo {
  version: string;
  commit: string;
  branch: string;
  buildDate: string;
  vercelEnv: string;
}

declare const __BUILD_INFO__: BuildInfo;
