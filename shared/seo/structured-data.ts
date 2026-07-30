import type { JsonObject } from "@/shared/seo/json-ld";

import { site } from "../../config/site";

export const personJsonLd: JsonObject = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  description: site.description,
  jobTitle: "Computer Science Student",
  sameAs: [site.social.github],
};
