"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/cn";

import { socialActionClass } from "./social-link.styles";

interface SocialPopoverProps {
  open: boolean;
  copied: boolean;
  href: string;
  onCopy: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function SocialPopover({
  open,
  copied,
  href,
  onCopy,
  onMouseEnter,
  onMouseLeave,
}: SocialPopoverProps) {
  const t = useTranslations("home.social");

  if (!open) {
    return null;
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: mouse handlers only extend hover-intent from the parent link, not user-facing interactivity — real interactive elements are the buttons inside
    <div
      className="absolute bottom-full left-1/2 z-30 -translate-x-1/2 pb-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg shadow-neutral-900/10">
        <div className="flex items-stretch">
          <button
            type="button"
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
            className={cn(
              socialActionClass,
              "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
            )}
          >
            <ExternalLink className="size-3 shrink-0" />

            <span className="lowercase">{t("actions.open")}</span>
          </button>

          <div aria-hidden="true" className="my-1 w-px bg-neutral-200" />

          <button
            type="button"
            onClick={onCopy}
            aria-live="polite"
            className={cn(
              socialActionClass,
              copied
                ? "bg-emerald-50 text-emerald-700"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
            )}
          >
            {copied ? (
              <Check className="size-3 shrink-0 text-emerald-600" />
            ) : (
              <Copy className="size-3 shrink-0" />
            )}

            <span className="lowercase">{copied ? t("actions.copied") : t("actions.copy")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
