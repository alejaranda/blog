import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { LOCALES } from "./constants";

export const requestConfig = getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as any)) {
    notFound();
  }

  const messages = (
    await import(`../../messages/${locale}.json`)
  ).default;

  return {
    messages,
    locale: locale as string,
  };
});

export const getMessages = async (locale: string) => {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
