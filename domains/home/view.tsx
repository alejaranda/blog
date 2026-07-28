import { Container } from "@/shared/ui/container";

import { Hero } from "./sections/hero/hero";
import { Introduction } from "./sections/introduction/introduction";
export function HomePage() {
  return (
    <Container>
      <Hero />

      <Introduction />
    </Container>
  );
}
