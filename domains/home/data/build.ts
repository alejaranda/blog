import { execSync } from "node:child_process";

import pkg from "@/package.json";

import type { BuildInfo } from "./build.types";

const GIT_COMMIT_COMMAND = "git rev-parse HEAD";
const GIT_BRANCH_COMMAND = "git rev-parse --abbrev-ref HEAD";

function safeExec(command: string, fallback: string): string {
  try {
    return execSync(command, { encoding: "utf8" }).trim();
  } catch {
    return fallback;
  }
}

const commit = process.env.VERCEL_GIT_COMMIT_SHA ?? safeExec(GIT_COMMIT_COMMAND, "unknown");

const branch = process.env.VERCEL_GIT_COMMIT_REF ?? safeExec(GIT_BRANCH_COMMAND, "unknown");

export const build: BuildInfo = {
  version: pkg.version,
  commit,
  branch,
  date: new Date().toISOString(),
  status: "deployed",
};
