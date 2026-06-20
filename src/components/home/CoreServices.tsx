import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const items = [
  {
    title: "Personalized Tutoring",
    image: "/images/services/tutoring.webp",
    desc: "One-on-one and small-group learning designed around each student's pace, goals, strengths, and challenges.",
  },
  {
    title: "Exam Preparation",
    image: "/images/services/exam.webp",
    desc: "Structured coaching and strategic preparation for national, international, professional, and university entrance examinations.",
  },
  {
    title: "Academic Support",
    image: "/images/services/support.webp",
    desc: "Comprehensive support systems that help students stay academically strong.",
  },
  {
    title: "Skill Development",
    image: "/images/services/skills.webp",
    desc: "Future-focused learning experiences in technology and communication.",
  },
  {
    title: "Career Development",
    image: "/images/services/career.webp",
    desc: "Practical learning and coaching programs for career growth.",
  },
  {
    title: "Research Support",
    image: "/images/services/research.webp",
    desc: "Guided support for academic research, essays, projects, and reports.",
  },
  {
    title: "Academic Consulting",
    image: "/images/services/consulting.webp",
    desc: "Advisor services for parents, educators, and institutions.",
  },
];

export function CoreServices() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          badge="Our Core Services"
          title="Personalized Learning For Every Student"
        />

        {/* ========================= */}
        {/* MOBILE DESIGN */}
        {/* ========================= */}
        <div className="mt-8 space-y-4 lg:hidden">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`
                overflow-hidden rounded-2xl border bg-white shadow-sm
                ${
                  index === 0
                    ? "border-0.5 border-active p-2"
                    : "border-neutral-200"
                }
              `}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-ink">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ========================= */}
        {/* DESKTOP DESIGN */}
        {/* ========================= */}
        <div className="mt-12 hidden border-t border-neutral-200 lg:block">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                grid
                gap-2
                border-b
                border-neutral-200
                py-8
                md:grid-cols-[1fr_1.4fr]
                md:gap-12
              "
            >
              <h3 className="text-2xl font-semibold text-ink">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-ink-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
