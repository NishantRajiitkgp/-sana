import Image from "next/image";
import { INSIGHTS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-bg-primary px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-serif text-4xl font-light text-text-primary md:text-5xl">
              Our <span className="italic">Insights</span>
            </h2>
            <a
              href="#"
              className="text-sm tracking-wider text-text-secondary transition-colors hover:text-text-primary"
            >
              View All
            </a>
          </div>
        </ScrollReveal>

        {/* Article cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 150}>
              <article className="group cursor-pointer overflow-hidden rounded-xl bg-bg-card">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-text-tertiary">
                    {article.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-lg leading-snug font-light text-text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs text-text-tertiary">
                    {article.date}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
