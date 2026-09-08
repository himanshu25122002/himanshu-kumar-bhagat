import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="w-full md:max-w-2xl">
      <p className="mb-5 font-mono text-sm text-accent">
        {profile.tagline}
      </p>
      <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-inkSoft">
        {profile.role} — first-author, IEEE Best Paper Award-winning researcher
        and hands-on engineer building deep learning and LLM-based systems.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
        >
          View my work
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Download resume
        </a>
        <a
          href={profile.researchCvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
        >
          Research CV
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5 border-t border-line pt-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex items-center gap-2 text-sm text-inkSoft transition-colors hover:text-ink"
        >
          <Github size={17} /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex items-center gap-2 text-sm text-inkSoft transition-colors hover:text-ink"
        >
          <Linkedin size={17} /> LinkedIn
        </a>
      </div>
        </div>

        <div className="shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-line ring-offset-4 ring-offset-paper shadow-[0_0_40px_-8px_rgba(46,76,138,0.35)] sm:h-48 sm:w-48 md:h-56 md:w-56">
            <Image
              src="/profile.jpg"
              alt="Himanshu Kumar Bhagat"
              fill
              sizes="(min-width: 768px) 224px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
