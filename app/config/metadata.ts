import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER || "@tutwitter";
const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "";

export const metadata: Metadata = {
  title: {
    default: "Alejandro Aranda",
    template: "%s",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description: "",
  keywords: [],
  authors: [{ name: "Alejandro" }],
  creator: "Alejandro",

  openGraph: {
    type: "website",
    locale: "en_EN",
    url: SITE_URL,
    title: "",
    description: "",
    siteName: "",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    images: [`${SITE_URL}/twitter-image.jpg`],
    creator: TWITTER_HANDLE,
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },

  ...(GOOGLE_VERIFICATION && {
    verification: {
      google: GOOGLE_VERIFICATION,
    },
  }),
};
