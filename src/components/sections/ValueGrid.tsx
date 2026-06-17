import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type Value = { icon: LucideIcon; title: string; desc: string };

export function ValueGrid({
  badge,
  title,
  subtitle,
  values,
  columns = 3,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  values: Value[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";
  return (
    <section className="py-20">
      <Container>
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />
        <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-neutral-200 bg-primary-50 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-200 text-brand">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-base text-ink-secondary">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
