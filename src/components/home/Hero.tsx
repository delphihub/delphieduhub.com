import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const students = [
  "/avatars/avatar1.jpg",
  "/avatars/avatar2.jpg",
  "/avatars/avatar3.jpg",
  "/avatars/avatar4.jpg",
  "/avatars/avatar5.jpg",
  "/avatars/avatar6.jpg",
];


export function Hero() {
     return (
      
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#d9d9d9 1px, transparent 1px),
            linear-gradient(90deg, #d9d9d9 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex rounded-full border border-[#A8D68B] bg-[#D7EDC5] px-4 py-3">
              <span className="text-xs font-medium text-[#1E1E1E]">
                Free trial classes and free consultation calls
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0A0A0A] md:text-6xl lg:text-5xl">
              Unlock Your Potential with Personalized Online Tutoring
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#5A5A5A] md:text-l">
              We offer tutoring and academic support services to help
              learners improve through teaching shaped around their
              needs and pace.
            </p>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-3">
              <Link
                href="#"
                className="rounded-full bg-[#006B43] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Started Today
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006B43] text-white transition hover:opacity-90"
              >
                <ArrowUpRight size={24} />
              </Link>
            </div>
          </div>

        {/* RIGHT CONTENT */}

<div className="relative mx-auto w-full max-w-[720px]">
  {/* Main Image Card */}
  <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#E9EFEF]">
    {/* Decorative Shape Top Left */}
    <div className="absolute left-0 top-0 h-16 w-16 md:h-24 md:w-24 rounded-br-[50px] bg-[#D6E3DE]" />

    {/* Decorative Shape Bottom Right */}
    <div className="absolute bottom-0 right-0 h-16 w-16 md:h-24 md:w-24 rounded-tl-[50px] bg-[#D6E3DE]" />

    {/* Student Image */}
    <div className="relative flex justify-center pt-10 md:pt-16">
      <Image
        src="/images/hero-student.png"
        alt="Student"
        width={550}
        height={700}
        priority
        className="
          h-auto
          w-[80%]
          sm:w-[75%]
          md:w-[70%]
          max-w-[520px]
          object-contain
        "
      />
    </div>

    {/* Desktop Floating Card */}
    <div
      className="
        hidden md:block
        absolute
        top-5
        right-5
        lg:top-6
        lg:right-6


        rounded-[24px]
        bg-[#006B43]
        p-4
        lg:p-5

        text-white
        shadow-2xl
      "
    >
      <Image
        src="/images/people.webp"
        alt="Students"
        width={150}
        height={40}
        className="mb-1 h-5 w-auto"
      />

      <p className="text-sm lg:text-md font-medium leading-relaxed">
        More than 1,000+ students
      </p>

      <p className="text-sm lg:text-md font-medium leading-relaxed">
        worldwide and growing
      </p>
    </div>
  </div>

  {/* Desktop Bottom Card */}
  <div
    className="
      hidden md:block
      absolute
      -left-6
      lg:-left-10
      bottom-12
      lg:bottom-16

      rounded-2xl
      bg-[#006B43]
      px-5
      py-4
      lg:px-6
      lg:py-5

      text-white
      shadow-xl
    "
  >
    <p className="text-sm lg:text-md font-medium">
      Empowering Thousands of
    </p>
    <p className="text-sm lg:text-md font-medium">
      Learners Worldwide
    </p>
  </div>

  {/* Mobile Cards */}
  <div className="mt-4 flex flex-col gap-3 md:hidden">
    <div className="rounded-2xl bg-[#006B43] p-4 text-white shadow-lg">
      <Image
        src="/images/people.webp"
        alt="Students"
        width={140}
        height={40}
        className="mb-3 h-7 w-auto"
      />

      <p className="text-sm font-medium">
        More than 1,000+ students worldwide and growing
      </p>
    </div>

    <div className="rounded-2xl bg-[#006B43] p-4 text-white shadow-lg">
      <p className="text-sm font-medium">
        Empowering Thousands of Learners Worldwide
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
