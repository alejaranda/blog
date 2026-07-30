import { Container } from "@/shared/ui/container";
import { ThemeSwitcher } from "@/shared/ui/theme-switcher";

import { SOCIAL_LINKS } from "./content/social-links";
import { Activity } from "./sections/activity/activity";
import { Hero } from "./sections/hero/hero";
import { Introduction } from "./sections/introduction/introduction";
import { SocialLinks } from "./sections/social-links/social-links";
import { Footer } from "./sections/footer/footer";

export function HomePage() {
  return (
    <Container>
      <Hero />
      <Introduction />
      <SocialLinks links={SOCIAL_LINKS} />
      <Activity />
      <Footer />
    </Container>
  );
}
