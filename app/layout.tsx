import { metadata } from "./config/metadata";
import { sfProDisplay, sfMono } from "./config/fonts";
import "./globals.css";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sfProDisplay.variable} ${sfMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
