"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { EqualizerBars } from "./equalizer-bars";

interface Track {
  title?: string;
  artist?: string;
  albumImage?: string;
  isPlaying?: boolean;
}

const REFRESH_INTERVAL = 5000;

export function SpotifySection() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch("/api/spotify");
        const data = await response.json();
        setTrack(data.albumImage ? data : null);
      } catch (error) {
        console.error("Failed to fetch Spotify track:", error);
        setTrack(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (loading || !track?.albumImage) {
    return null;
  }

  return (
    <div className="flex items-center gap-2" aria-label="Currently playing">
      <div className="relative w-5.5 h-5.5 rounded overflow-hidden shrink-0">
        <Image
          src={track.albumImage}
          alt={`${track.title} album art`}
          fill
          className="object-cover"
          sizes="22px"
          priority={false}
        />
      </div>

      <div className="flex flex-col gap-0.5 min-w-0 max-w-45">
        <span className="text-[12px] font-medium text-zinc-100 leading-none truncate">
          {track.title}
        </span>
        <span className="text-[11px] text-zinc-400 leading-none truncate">
          {track.artist}
        </span>
      </div>

      {track.isPlaying && (
        <span className="text-emerald-500 ml-1 shrink-0">
          <EqualizerBars />
        </span>
      )}
    </div>
  );
}
