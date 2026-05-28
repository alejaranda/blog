"use client";

import { useEffect, useState } from "react";
import { SpotifySection } from "./spotify-section";

const MOCK_LOCATION = "Santiago";

export function Footer() {
  const [time, setTime] = useState<string>("--:-- --");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Santiago",
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-4"
      aria-label="Site footer"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">

          <p className="text-sm text-neutral-500 tracking-tight whitespace-nowrap">
            {MOCK_LOCATION}
            <span className="mx-1.5 opacity-40">—</span>
            {time}
          </p>
        </div>
        <SpotifySection />
      </div>
    </div>
  );
}
