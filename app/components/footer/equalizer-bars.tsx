export function EqualizerBars() {
  const bars: { h: number; dur: string; delay: string }[] = [
    { h: 9, dur: "0.9s", delay: "0s" },
    { h: 12, dur: "0.7s", delay: "0.15s" },
    { h: 7, dur: "1.1s", delay: "0.3s" },
    { h: 10, dur: "0.8s", delay: "0.1s" },
  ];

  return (
    <span
      className="flex items-end gap-0.5 h-3 text-emerald-500"
      role="img"
      aria-label="Playing"
    >
      {bars.map((b, i) => (
        <span
          key={i}
          className="eq-bar inline-block w-0.5 rounded bg-current opacity-75"
          style={{ height: b.h, animationDuration: b.dur, animationDelay: b.delay }}
        />
      ))}
    </span>
  );
}
