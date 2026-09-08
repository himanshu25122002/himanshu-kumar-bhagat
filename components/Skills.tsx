import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Technical Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wide text-inkSoft">
                  {group.category}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
