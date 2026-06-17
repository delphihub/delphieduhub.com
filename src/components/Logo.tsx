import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "inverse";
}) {
  const textColor = variant === "inverse" ? "text-white" : "text-brand";
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M6 7c8 0 14 5.5 14 13"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className={variant === "inverse" ? "text-accent" : "text-brand"}
        />
        <path
          d="M6 14c5 0 8.5 3.4 8.5 8"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          className={variant === "inverse" ? "text-white" : "text-hover"}
        />
        <circle
          cx="7.5"
          cy="23.5"
          r="2.8"
          className={variant === "inverse" ? "fill-accent" : "fill-brand"}
        />
      </svg>
      <span className={cn("text-lg font-bold tracking-tight", textColor)}>
        Delphi Education Hub
      </span>
    </Link>
  );
}
