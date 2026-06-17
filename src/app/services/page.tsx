import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ComprehensiveServices } from "@/components/sections/ComprehensiveServices";
import { Process } from "@/components/sections/Process";
import { Curriculum } from "@/components/home/Curriculum";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Our Services — Delphi Education Hub",
  description:
    "Explore Delphi's programs: Prep, Academics, UpSkill, and Career — personalized learning and support at every stage.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Programs Built Around Every Learner"
        subtitle="From exam preparation to career growth, our services are designed to support success at every stage of the learning journey."
        cta={{ label: "Book a Free Call", href: "/contact" }}
      />
      <ComprehensiveServices />
      <Process />
      <Curriculum />
      <Faq showImage={false} />
      <Cta />
    </>
  );
}
