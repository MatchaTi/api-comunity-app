declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: number;
      PWD: string;
      MONGO_URI: string;
      JWT_ACCESS_TOKEN_SECRET: string;
      JWT_REFRESH_TOKEN_SECRET: string;
      EMAIL_PASS: string;
      EMAIL_USER: string;
      VERSION: string;
      SALT_SECRET: number;
    }
  }
}

export {};
