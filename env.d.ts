declare namespace NodeJS {
  interface ProcessEnv {
    readonly VERCEL_GIT_COMMIT_SHA?: string;
    readonly VERCEL_GIT_COMMIT_REF?: string;
  }
}
