import { promises as fs } from "fs";
import path from "path";

interface TokenCache {
  token: string;
  expiresAt: number;
}

let tokenCache: TokenCache | null = null;

const TOKEN_BUFFER_MS = 300000;

export async function refreshAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify credentials");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${auth}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error("Spotify token refresh failed:", error);
    throw new Error("Failed to refresh Spotify token");
  }

  const data = await response.json();
  const newToken = data.access_token;
  const expiresIn = data.expires_in || 3600;

  tokenCache = {
    token: newToken,
    expiresAt: Date.now() + expiresIn * 1000,
  };

  try {
    const envPath = path.join(process.cwd(), ".env.local");
    let envContent = await fs.readFile(envPath, "utf-8");
    const tokenRegex = /^SPOTIFY_ACCESS_TOKEN=.*/m;

    envContent = tokenRegex.test(envContent)
      ? envContent.replace(tokenRegex, `SPOTIFY_ACCESS_TOKEN=${newToken}`)
      : envContent + `\nSPOTIFY_ACCESS_TOKEN=${newToken}`;

    await fs.writeFile(envPath, envContent);
  } catch (error) {
    console.warn("Could not update .env.local, using in-memory token:", error);
  }

  return newToken;
}

export async function getValidToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + TOKEN_BUFFER_MS) {
    return tokenCache.token;
  }

  const envToken = process.env.SPOTIFY_ACCESS_TOKEN;
  if (envToken) {
    tokenCache = {
      token: envToken,
      expiresAt: Date.now() + 3600 * 1000,
    };
    return envToken;
  }

  return refreshAccessToken();
}

export async function getValidTokenWithRefresh(
  failedToken?: string
): Promise<string> {
  if (failedToken) {
    tokenCache = null;
    return refreshAccessToken();
  }

  return getValidToken();
}
