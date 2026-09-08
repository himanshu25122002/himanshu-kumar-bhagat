import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-xl font-serif text-2xl font-semibold leading-snug text-ink md:text-3xl">
            Interested in AI/ML research, engineering, or collaboration?
            Let&apos;s connect.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-line py-8">
        <p className="mx-auto max-w-5xl px-6 text-xs text-inkSoft">
          {profile.name} — {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
