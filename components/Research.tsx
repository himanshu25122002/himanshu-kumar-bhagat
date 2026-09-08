import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { publications, conferencePresentation } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Research &amp; Publications
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line">
          {publications.map((pub) => (
            <Reveal key={pub.id}>
              <article className="py-10">
                <p className="font-mono text-xs uppercase tracking-wide text-inkSoft">
                  {pub.status}
                </p>
                <h3 className="mt-2 max-w-2xl font-serif text-xl font-semibold leading-snug text-ink md:text-2xl">
                  {pub.title}
                </h3>

                {pub.award && (
                  <p className="mt-3 inline-block rounded-sm bg-goldSoft px-2.5 py-1 text-sm font-medium text-gold">
                    {pub.award}
                  </p>
                )}

                <p className="mt-4 max-w-prose text-sm italic text-inkSoft md:text-base">
                  {pub.venue}
                </p>

                <p className="mt-4 max-w-prose text-sm leading-relaxed text-inkSoft md:text-base">
                  {pub.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  {pub.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs text-inkSoft">{m.label}</dt>
                      <dd className="mt-1 font-mono text-lg font-medium text-ink">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-wrap gap-4">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

        </div>

        <Reveal>
          <h3 className="mt-10 font-mono text-xs uppercase tracking-wide text-inkSoft">
            Conference Presentation
          </h3>
        </Reveal>

        <div className="mt-4 divide-y divide-line">
          <Reveal>
            <article className="py-8">
              <p className="font-mono text-xs uppercase tracking-wide text-inkSoft">
                {conferencePresentation.status}
              </p>
              <h3 className="mt-2 max-w-2xl font-serif text-xl font-semibold leading-snug text-ink md:text-2xl">
                {conferencePresentation.title}
              </h3>
              <p className="mt-4 max-w-prose text-sm italic text-inkSoft md:text-base">
                {conferencePresentation.venue}
              </p>
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-inkSoft md:text-base">
                {conferencePresentation.description}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
