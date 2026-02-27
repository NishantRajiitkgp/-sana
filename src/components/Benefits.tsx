import { BENEFITS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

function BenefitIcon({ type }: { type: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-divider">
      {type === "strength" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z"
            stroke="#F5EBDB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === "flexibility" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20C4 20 8 4 12 4C16 4 20 20 20 20"
            stroke="#F5EBDB"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {type === "balance" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#F5EBDB" strokeWidth="1.5" />
          <line
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            stroke="#F5EBDB"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </div>
  );
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-bg-primary px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-16 text-center font-serif text-4xl font-light text-text-primary md:text-5xl">
            Why practice yoga
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 150}>
              <div
                className={`flex flex-col items-center text-center ${
                  i < BENEFITS.length - 1
                    ? "border-b border-divider pb-12 md:border-b-0 md:border-r md:pb-0"
                    : ""
                } md:px-10`}
              >
                <BenefitIcon type={benefit.icon} />
                <h3 className="mt-5 font-serif text-2xl font-light text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
