import { ABOUT } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="bg-bg-primary px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="font-serif text-3xl leading-relaxed font-light text-accent-cream sm:text-4xl md:text-5xl">
            {ABOUT.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            <em className="italic">{ABOUT.emphasis}</em>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
