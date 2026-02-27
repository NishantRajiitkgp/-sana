import Image from "next/image";
import { HERO } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={HERO.image}
        alt="Yoga practice in studio"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-16 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <ScrollReveal>
            <h1 className="font-serif text-5xl leading-[1.1] font-light text-text-primary sm:text-6xl md:text-7xl lg:text-[80px]">
              {HERO.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 flex items-center gap-6">
              {/* Play button */}
              <button
                aria-label="Play intro video"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-text-primary/30 transition-colors hover:bg-text-primary/10"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  className="ml-0.5"
                >
                  <path d="M15 9L0.5 17.66V0.34L15 9Z" fill="#F5EBDB" />
                </svg>
              </button>

              {/* Book CTA */}
              <a
                href="#cta"
                className="rounded-full bg-accent-cream px-6 py-3 text-sm font-medium tracking-wide text-bg-primary transition-opacity hover:opacity-90"
              >
                Book a Session
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
