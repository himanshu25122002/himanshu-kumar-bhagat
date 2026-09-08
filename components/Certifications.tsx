import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-wide text-inkSoft">
            Certifications
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {certifications.map((certification) => (
            <Reveal key={certification}>
              <p className="h-full rounded-sm border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-inkSoft">
                {certification}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
