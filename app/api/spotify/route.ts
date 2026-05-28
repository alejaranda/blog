import { NextResponse } from "next/server";
import { getValidToken, getValidTokenWithRefresh } from "@/app/lib/spotify";

export async function GET() {
  try {
    let accessToken = await getValidToken();
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 401) {
      accessToken = await getValidTokenWithRefresh(accessToken);
      const retryResponse = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!retryResponse.ok && retryResponse.status !== 204) {
        throw new Error(`Spotify API error: ${retryResponse.status}`);
      }

      if (retryResponse.status === 204) {
        return NextResponse.json({ isPlaying: false });
      }

      const data = await retryResponse.json();
      const track = await parseTrackData(data);
      return NextResponse.json(track || { isPlaying: false });
    }

    if (!response.ok && response.status !== 204) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();
    const track = await parseTrackData(data);
    return NextResponse.json(track || { isPlaying: false });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}

async function parseTrackData(data: any) {
  if (!data.item) {
    return null;
  }

  return {
    title: data.item.name,
    artist: data.item.artists[0]?.name || "Unknown",
    albumImage: data.item.album.images[0]?.url || "",
    isPlaying: data.is_playing,
  };
}
