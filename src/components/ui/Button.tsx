import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "accent" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-hover",
  accent: "bg-accent text-active hover:brightness-95",
  outline: "border border-brand/30 text-brand hover:bg-primary-100",
  ghost: "text-brand hover:bg-primary-100",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
