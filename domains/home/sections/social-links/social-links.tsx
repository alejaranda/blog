import { useTranslations } from "next-intl";

import type { Social } from "../../content/social-links";
import { SocialLink } from "./social-link";

interface SocialLinksProps {
  links: readonly Social[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  const t = useTranslations("home.social");

  return (
    <nav aria-label={t("navigation")} className="mb-10">
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <SocialLink
              social={{
                ...link,
                label: t(link.id),
              }}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
