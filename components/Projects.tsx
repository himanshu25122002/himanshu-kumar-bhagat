import { Github } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-paperDim">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Selected Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <div className="flex h-full flex-col rounded-sm border border-line bg-paper p-6 transition-colors hover:border-accent">
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-inkSoft">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm bg-accentSoft px-2.5 py-1 text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
