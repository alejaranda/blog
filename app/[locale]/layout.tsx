import { Providers } from "@/app/providers";
import { notFound } from "next/navigation";
import { metadata } from "@/config/metadata";
import { sfProDisplay, sfMono } from "@/config/fonts";
import "@/app/globals.css";
import { LOCALES } from "@/config/constants";
import { getMessages } from "@/config/i18n";
import type { Locale } from "@/config/constants";
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export { metadata };


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html
      lang={locale}
      className={`${sfProDisplay.variable} ${sfMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
