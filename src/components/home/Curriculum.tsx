"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const regions = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "America", flag: "🇺🇸" },
];

const levels = [
  "Elementary School",
  "Middle School",
  "High School",
  "University Undergraduate",
  "Postgraduate",
  "Working Professionals",
];

const exams = [
  "Provincial Exams",
  "Ministerial Exams",
  "EQAO",
  "SSAT",
  "ISEE",
  "SAT",
  "AP",
  "IB",
];

const subjects = [
  "Mathematics",
  "English",
  "Sciences",
  "Computer Science & Coding",
  "History",
  "Foreign Languages",
];

function List({ items, inverse }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-base">
          <Check
            className={cn("h-5 w-5 shrink-0", inverse ? "text-accent" : "text-brand")}
          />
          <span className={inverse ? "text-white" : "text-ink-secondary"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Curriculum() {
  const [active, setActive] = useState(0);

  return (
    <section id="curriculum" className="py-20">
      <Container>
        <SectionHeading badge="Explore Programs" title="Choose Your Curriculum" />

        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 p-1.5">
            {regions.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === i
                    ? "bg-white text-ink shadow-sm"
                    : "text-ink-secondary hover:text-ink",
                )}
              >
                <span>{r.flag}</span>
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-primary-50 p-7">
            <h3 className="mb-6 text-2xl font-semibold text-ink">Levels We Cover</h3>
            <List items={levels} />
          </div>
          <div className="rounded-3xl bg-brand p-7 lg:-mt-4 lg:mb-[-1rem]">
            <h3 className="mb-6 text-2xl font-semibold text-white">Exams We Coach</h3>
            <List items={exams} inverse />
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-primary-50 p-7">
            <h3 className="mb-6 text-2xl font-semibold text-ink">Subjects We Teach</h3>
            <List items={subjects} />
          </div>
        </div>
      </Container>
    </section>
  );
}
