import { build } from "../../data/build";

import { BuildBadge } from "./build-badge";
import { HeroTitle } from "./hero-title";

export function Hero() {
  return (
    <header className="flex items-center gap-5">
      <HeroTitle />

      <BuildBadge build={build} />
    </header>
  );
}
