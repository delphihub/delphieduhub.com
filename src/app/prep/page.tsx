import type { Metadata } from "next";
import { ProgramTemplate } from "@/components/sections/ProgramTemplate";
import { programData } from "@/lib/programs";

const program = programData.prep;

export const metadata: Metadata = {
  title: `${program.name} — Delphi Education Hub`,
  description: program.heroSub,
};

export default function PrepPage() {
  return <ProgramTemplate program={program} />;
}
