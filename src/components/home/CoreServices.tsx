import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Personalized Tutoring",
    desc: "One-on-one and small-group learning designed around each student's pace, goals, strengths, and challenges.",
  },
  {
    title: "Exam Preparation",
    desc: "Structured coaching and strategic preparation for national, international, professional, and university entrance examinations.",
  },
  {
    title: "Academic Support",
    desc: "Comprehensive support systems that help students stay academically strong through study coaching, revision, instruction, and assignment support.",
  },
  {
    title: "Skill Development",
    desc: "Future-focused learning experiences in technology, digital skills, creative disciplines, communication, and other high-value competencies.",
  },
  {
    title: "Career Development",
    desc: "Practical learning and coaching programs that help students, graduates, and professionals prepare for certifications and career growth.",
  },
  {
    title: "Research Support",
    desc: "Guided support for academic research, essays, projects, reports, and data analysis.",
  },
  {
    title: "Academic Consulting",
    desc: "Advisor services for parents, educators, and institutions seeking stronger learning systems, academic planning, and student development.",
  },
];

export function CoreServices() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading badge="Our Core Services" title="Personalized Learning For Every Student" />
        <div className="mt-12 divide-y divide-neutral-200 border-t border-neutral-200">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid gap-2 py-7 md:grid-cols-[1fr_1.4fr] md:gap-12"
            >
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="text-base text-ink-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
