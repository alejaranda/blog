import { Container } from "@/shared/ui/container";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher";

import type { ActivityItemsByCategory } from "./content/activity";
import { SOCIAL_LINKS } from "./content/social-links";
import { Activity } from "./sections/activity/activity";
import { Footer } from "./sections/footer/footer";
import { Hero } from "./sections/hero/hero";
import { Introduction } from "./sections/introduction/introduction";
import { SocialLinks } from "./sections/social-links/social-links";

type Props = {
  activityItemsByCategory: ActivityItemsByCategory;
};

export function HomePage({ activityItemsByCategory }: Props) {
  return (
    <Container>
      <Hero />
      <Introduction />
      <SocialLinks links={SOCIAL_LINKS} />
      <Activity itemsByCategory={activityItemsByCategory} />
      <Footer />
      <ThemeSwitcher />
    </Container>
  );
}
