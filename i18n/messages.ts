import homeEn from "@/domains/home/messages/en.json";
import homeEs from "@/domains/home/messages/es.json";

import contentListEn from "@/shared/ui/content-list/messages/en.json";
import contentListEs from "@/shared/ui/content-list/messages/es.json";

export const messages = {
  en: {
    home: homeEn,
    shared: {
      contentList: contentListEn,
    },
  },
  es: {
    home: homeEs,
    shared: {
      contentList: contentListEs,
    },
  },
} as const;
