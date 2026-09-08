import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <div className="grid gap-2 py-8 md:grid-cols-[1fr_2fr] md:gap-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-inkSoft">{job.role}</p>
                  <p className="mt-1 font-mono text-xs text-inkSoft">
                    {job.period}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-inkSoft md:text-base"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm bg-accentSoft px-2.5 py-1 text-xs text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
