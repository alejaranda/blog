import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    { path: "../../fonts/sf-pro-display-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/sf-pro-display-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/sf-pro-display-600.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/sf-pro-display-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../../fonts/sf-pro-display-700.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/sf-pro-display-700-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const sfMono = localFont({
  src: [
    { path: "../../fonts/sf-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/sf-mono-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/sf-mono-700.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/sf-mono-700-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-mono",
  display: "swap",
});
