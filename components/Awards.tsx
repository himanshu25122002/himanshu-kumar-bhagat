import { Award } from "lucide-react";
import Reveal from "./Reveal";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section id="awards" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Awards &amp; Recognition
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {awards.map((award) => (
            <Reveal key={award.title}>
              <div className="h-full rounded-sm border border-line p-6">
                <Award className="text-gold" size={22} strokeWidth={1.75} />
                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-ink">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">
                  {award.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
