import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-wide text-inkSoft">
            Certifications
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-inkSoft">
            {certifications.join("  \u00b7  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
