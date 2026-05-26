interface SocialLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

function SocialLink({ href, label, external = false }: SocialLinkProps) {
  const linkClass = "text-sm text-zinc-400 underline decoration-zinc-400 transition-colors duration-300 hover:text-zinc-100 hover:decoration-zinc-100";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={linkClass}
    >
      {label}
    </a>
  );
}

export function SocialLinks() {
  const links = [
    { href: "mailto:alejandro.arancibia.aranda@gmail.com", label: "Message me" },
    { href: "https://github.com", label: "GitHub", external: true },
    { href: "https://x.com/", label: "𝕏", external: true },
  ];

  return (
    <div className="flex items-center gap-4 mb-10">
      {links.map((link) => (
        <SocialLink key={link.label} {...link} />
      ))}
    </div>
  );
}
