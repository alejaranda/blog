"use client";

import { NextIntlClientProvider } from "next-intl";

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone="America/New_York"
    >
      {children}
    </NextIntlClientProvider>
  );
}
