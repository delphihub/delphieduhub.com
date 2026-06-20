import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary-200 bg-accent px-4 py-1.5 text-sm font-medium text-brand",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-active" />
      {children}
    </span>
  );
}
