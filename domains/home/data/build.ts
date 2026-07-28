import { execSync } from "node:child_process";

import pkg from "../../../package.json";
import type { BuildInfo } from "./build.types";

function safeExec(command: string, fallback: string): string {
  try {
    return execSync(command, { encoding: "utf8" }).trim();
  } catch {
    return fallback;
  }
}

const commit = process.env["VERCEL_GIT_COMMIT_SHA"] ?? safeExec("git rev-parse HEAD", "unknown");

const branch =
  process.env["VERCEL_GIT_COMMIT_REF"] ?? safeExec("git rev-parse --abbrev-ref HEAD", "unknown");

export const build: BuildInfo = {
  version: pkg.version,
  commit,
  branch,
  date: new Date().toISOString(),
  status: "deployed",
};
