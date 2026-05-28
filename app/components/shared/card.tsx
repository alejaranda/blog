"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BaseCardProps {
  href: string;
  title: string;
  badge?: string;
  view: "list" | "compact";
}

interface ProjectCardProps extends BaseCardProps {
  type: "project";
  logo: string;
  role: string;
  years: string;
  description?: string;
  date?: string;
}

interface BlogCardProps extends BaseCardProps {
  type: "blog";
  icon?: string;
  date: string;
  excerpt?: string;
}

type CardProps = ProjectCardProps | BlogCardProps;

export function Card(props: CardProps) {
  const isCompact = props.view === "compact";

  if (isCompact) {
    return (
      <Link
        href={props.href}
        className="group flex items-center gap-3 py-3 px-3 -mx-3 border-b border-zinc-800 transition-colors duration-200 hover:bg-zinc-800/40 last:border-none"
      >
        <span className="font-mono text-xs text-zinc-500 shrink-0 w-14">
          {props.date}
        </span>

        <div className="flex items-baseline gap-1.5 min-w-0 flex-1">
          <span className="text-sm text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50 shrink-0">
            {props.title}
          </span>
          <span className="text-zinc-700/50 shrink-0">·</span>
          {props.type === "project" && props.description ? (
            <span className="text-xs text-zinc-400 truncate transition-colors duration-200 group-hover:text-zinc-300">
              {props.description.length > 45
                ? props.description.substring(0, 45) + "..."
                : props.description}
            </span>
          ) : props.type === "blog" && props.excerpt ? (
            <span className="text-xs text-zinc-400 truncate transition-colors duration-200 group-hover:text-zinc-300">
              {props.excerpt}
            </span>
          ) : null}
          {props.badge && (
            <span className="text-xs font-medium border border-zinc-700/50 text-zinc-400 bg-zinc-900/50 rounded px-1.5 py-px whitespace-nowrap shrink-0 ml-auto">
              {props.badge}
            </span>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={props.href}
      className="group flex items-center gap-3.5 py-3 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800/40"
    >
      {/* Icon/Logo */}
      {props.type === "project" ? (
        <div className="w-9 h-9 rounded-md shrink-0 overflow-hidden flex items-center justify-center bg-zinc-900/50">
          <Image
            src={props.logo}
            alt={props.title}
            width={36}
            height={36}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        props.icon && (
          <motion.div
            className="w-9 h-9 rounded-md shrink-0 flex items-center justify-center bg-zinc-900/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div dangerouslySetInnerHTML={{ __html: props.icon }} />
          </motion.div>
        )
      )}

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Title + Badge */}
        <div className="flex items-baseline gap-2">
          <span className="text-base text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50">
            {props.title}
          </span>
          {props.badge && (
            <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border border-zinc-700/50 text-zinc-400 bg-zinc-900/50">
              {props.badge}
            </span>
          )}
        </div>

        {/* Meta info */}
        <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
          {props.type === "project" ? (
            <>
              <span className="text-sm text-zinc-400">{props.role}</span>
              <span className="text-sm text-zinc-700 shrink-0">·</span>
              <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap shrink-0">
                {props.years}
              </span>
            </>
          ) : (
            <>
              <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap shrink-0">
                {props.date}
              </span>
              {props.excerpt && (
                <>
                  <span className="text-xs text-zinc-700 shrink-0">·</span>
                  <span className="text-xs text-zinc-400 line-clamp-1">
                    {props.excerpt}
                  </span>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Right side actions */}
      {props.type === "blog" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-600 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}

