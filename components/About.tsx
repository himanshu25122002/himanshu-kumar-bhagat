import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            About
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-inkSoft md:text-lg">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
