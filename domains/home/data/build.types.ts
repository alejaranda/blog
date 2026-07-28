export type BuildStatus = "deployed" | "building" | "failed";

export interface BuildInfo {
  version: string;
  commit: string;
  branch: string;
  date: string;
  status: BuildStatus;
}
