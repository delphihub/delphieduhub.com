import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const services = [
  {
    name: "Delphi Prep",
    href: "/prep",
    image: "/images/prog-prep.jpg",
    desc: "Focused preparation for major exams, admissions tests, certifications, and academic assessments across American, British, Canadian, Nigerian and international curricula.",
  },
  {
    name: "Delphi Academics",
    href: "/academics",
    image: "/images/prog-academics.jpg",
    desc: "Comprehensive academic support for students through tutoring, homework guidance, research support, enrichment, and learning coaching.",
  },
  {
    name: "Delphi UpSkill",
    href: "/upskill",
    image: "/images/prog-upskill.jpg",
    desc: "Future-ready programs in digital skills, technology, creative disciplines, communication, and practical competencies for modern life and work.",
  },
  {
    name: "Delphi Career",
    href: "/career",
    image: "/images/prog-career.jpg",
    desc: "Professional learning, certification, workplace skills, and career development programs designed for long-term growth and advancement.",
  },
];

export function ComprehensiveServices() {
  return (
    <section className="bg-primary-50 py-20">
      <Container>
        <SectionHeading
          badge="Our Programs"
          title="Comprehensive Services Built For Every Learner"
          subtitle="From personalized learning programs to practical skill development, our services are designed to support success at every stage."
        />
        <div className="mt-12 flex flex-col gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className="grid items-center gap-6 rounded-3xl border border-neutral-200 bg-white p-5 md:grid-cols-[1.4fr_1fr] md:p-6"
            >
              <div className="md:pr-6">
                <h3 className="text-2xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-3 max-w-md text-base text-ink-secondary">
                  {s.desc}
                </p>
                <Button href={s.href} variant="primary" className="mt-6 gap-2">
                  Explore Program
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
