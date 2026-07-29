import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { sfMono, sfPro } from "@/config/fonts";
import { metadata } from "@/config/metadata";
import { personJsonLd } from "@/config/structured-data";

import { routing } from "@/i18n/routing";

import { cn } from "@/shared/lib/cn";
import { Providers } from "@/shared/providers/providers";
import { JsonLd } from "@/shared/ui/json-ld";
import "../globals.css";

export { metadata };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={cn(sfPro.variable, sfMono.variable)} suppressHydrationWarning>
      <body>
        <JsonLd data={personJsonLd} />

        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
