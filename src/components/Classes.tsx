import Image from "next/image";
import { CLASSES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import Divider from "./Divider";

export default function Classes() {
  return (
    <section id="classes" className="bg-bg-primary px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl font-light text-text-primary md:text-5xl">
              Find your flow
              <br />
              with our <span className="italic">Classes</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
              Each of our classes is lovingly designed to
              <br />
              meet you where you are on your journey.
            </p>
          </div>
        </ScrollReveal>

        <Divider className="mt-10" />

        {/* Class rows */}
        {CLASSES.map((cls, i) => (
          <ScrollReveal key={cls.name} delay={i * 150}>
            <div className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:gap-8">
              {/* Name */}
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-light text-text-primary">
                  {cls.name}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-sm leading-relaxed text-text-secondary">
                  {cls.description}
                </p>
              </div>

              {/* Metadata */}
              <div className="flex gap-6 md:col-span-3 md:flex-col md:gap-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-text-tertiary">
                    Level
                  </span>
                  <p className="text-sm text-text-primary">{cls.level}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-text-tertiary">
                    Duration
                  </span>
                  <p className="text-sm text-text-primary">{cls.duration}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-text-tertiary">
                    Frequency
                  </span>
                  <p className="text-sm text-text-primary">{cls.frequency}</p>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            </div>
            {i < CLASSES.length - 1 && <Divider />}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
