import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-50">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url(/images/grid-bg.png)",
          backgroundSize: "cover",
        }}
        aria-hidden
      />
      <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-200 px-4 py-1.5 text-sm font-medium text-brand">
            Free trial classes and free consultation calls
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Unlock Your Potential with Personalized Online Tutoring
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-secondary">
            We offer tutoring and academic support services to help learners
            improve through teaching shaped around their needs and pace.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" className="gap-2">
              Get Started Today
              <ArrowUpRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[32px] bg-gradient-to-b from-primary-200 to-primary-100">
            <Image
              src="/images/hero-student.png"
              alt="Smiling student holding a notebook and backpack"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain object-bottom"
            />
            <div className="absolute right-4 top-4 rounded-2xl bg-active px-4 py-3 text-xs text-white shadow-lg">
              <p className="font-semibold">More than 1,200+ students</p>
              <p className="text-white/70">worldwide and growing</p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-xs text-ink shadow-lg backdrop-blur">
              <p className="font-semibold">Empowering Thousands</p>
              <p className="text-ink-secondary">of Learners Worldwide</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
