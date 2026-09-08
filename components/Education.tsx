import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Education
          </h2>
          <div className="mt-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-inkSoft md:text-base">
              {education.degree}
            </p>
            <p className="mt-2 font-mono text-xs text-inkSoft">
              {education.period}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
