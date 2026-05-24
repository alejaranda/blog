import createMiddleware from "next-intl/middleware";
import { LOCALES, DEFAULT_LOCALE } from "@/app/config/constants";

export default createMiddleware({
  locales: LOCALES as unknown as string[],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "always",
});

export const config = {
  matcher: [
    "/((?!_next|api|.*\\..*|.*-icon\\.webp|.*-apple-touch-icon\\.png).*)",
  ],
};
