import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Fonction pour obtenir le hash du commit Git
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
};

// Fonction pour obtenir la branche Git
const getGitBranch = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Variables de build - Vercel injecte automatiquement ces variables
  const buildInfo = {
    version: process.env.npm_package_version || '1.0.0',
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || getGitHash(),
    branch: process.env.VERCEL_GIT_COMMIT_REF || getGitBranch(),
    buildDate: new Date().toISOString(),
    vercelEnv: process.env.VERCEL_ENV || 'development',
  };

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        },
      },
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
      '__BUILD_INFO__': JSON.stringify(buildInfo),
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
