import Image from "next/image";
import { CTA } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function CallToAction() {
  return (
    <section id="cta" className="bg-bg-primary px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Top row: headline + desc + CTA */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <ScrollReveal>
            <h2 className="font-serif text-4xl leading-tight font-light text-text-primary md:text-5xl lg:text-6xl">
              {CTA.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-sm">
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                {CTA.description}
              </p>
              <a
                href="#"
                className="inline-block rounded-full bg-accent-cream px-6 py-3 text-sm font-medium tracking-wide text-bg-primary transition-opacity hover:opacity-90"
              >
                Start Your Journey
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Image mosaic */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {CTA.images.map((src, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Yoga practice ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
