import type { Metadata } from "next";
import { ProgramTemplate } from "@/components/sections/ProgramTemplate";
import { programData } from "@/lib/programs";

const program = programData.academics;

export const metadata: Metadata = {
  title: `${program.name} — Delphi Education Hub`,
  description: program.heroSub,
};

export default function AcademicsPage() {
  return <ProgramTemplate program={program} />;
}
