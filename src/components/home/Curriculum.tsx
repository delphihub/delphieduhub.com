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


const curriculumData = {
  Nigeria: {
    levels: [
      "Primary School",
      "Junior Secondary School",
      "Senior Secondary School",
      "University Undergraduate",
      "Postgraduate",
      "Working Professionals",
    ],
    exams: [
      "WAEC",
      "NECO",
      "JAMB",
      "BECE",
      "Common Entrance",
      "JUPEB",
      "IJMB",
      "Post UTME",
    ],
    subjects: [
      "Mathematics",
      "English Language",
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
    ],
  },

  "United Kingdom": {
    levels: [
      "Primary School",
      "Key Stage 3",
      "GCSE",
      "A-Level",
      "University Undergraduate",
      "Working Professionals",
    ],
    exams: [
      "GCSE",
      "A-Level",
      "11+",
      "SATs",
      "UCAT",
      "BMAT",
      "Entrance Exams",
    ],
    subjects: [
      "Mathematics",
      "English Literature",
      "English Language",
      "Physics",
      "Chemistry",
      "Biology",
    ],
  },

  Canada: {
    levels: [
      "Elementary School",
      "Middle School",
      "High School",
      "University Undergraduate",
      "Postgraduate",
      "Working Professionals",
    ],
    exams: [
      "EQAO",
      "OSSLT",
      "SAT",
      "AP",
      "IB",
      "Provincial Exams",
    ],
    subjects: [
      "Mathematics",
      "English",
      "Sciences",
      "Computer Science",
      "French",
      "History",
    ],
  },

  America: {
    levels: [
      "Elementary School",
      "Middle School",
      "High School",
      "College Undergraduate",
      "Graduate School",
      "Professionals",
    ],
    exams: [
      "SAT",
      "ACT",
      "AP",
      "PSAT",
      "SSAT",
      "ISEE",
      "GRE",
      "GMAT",
    ],
    subjects: [
      "Mathematics",
      "English",
      "Science",
      "Computer Science",
      "History",
      "Spanish",
    ],
  },
} as const;



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
 const [active, setActive] = useState("Nigeria");

  const current =
    curriculumData[active as keyof typeof curriculumData];
  return (
    <section id="curriculum" className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          badge="Explore Programs"
          title="Choose Your Curriculum"
        />

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-100 p-2">
            {regions.map((region) => (
              <button
                key={region.name}
                type="button"
                onClick={() => setActive(region.name)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  active === region.name
                    ? "bg-white text-ink shadow-sm"
                    : "text-ink-secondary hover:text-ink"
                )}
              >
                <span>{region.flag}</span>
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Levels */}
          <div className="rounded-3xl border border-neutral-200 bg-primary-50 p-6 lg:p-7">
            <h3 className="mb-6 text-xl lg:text-2xl font-semibold text-ink">
              Levels We Cover
            </h3>

            <List items={[...current.levels]} />
          </div>

          {/* Exams */}
          <div className="rounded-3xl bg-brand p-6 lg:p-7 lg:-mt-4 lg:mb-[-1rem]">
            <h3 className="mb-6 text-xl lg:text-2xl font-semibold text-white">
              Exams We Coach
            </h3>

            <List items={[...current.exams]} inverse />
          </div>

          {/* Subjects */}
          <div className="rounded-3xl border border-neutral-200 bg-primary-50 p-6 lg:p-7">
            <h3 className="mb-6 text-xl lg:text-2xl font-semibold text-ink">
              Subjects We Teach
            </h3>

            <List items={[...current.subjects]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
