import { FOOTER_COLUMNS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import Divider from "./Divider";

export default function Footer() {
  return (
    <footer className="bg-bg-footer px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Main headline */}
        <ScrollReveal>
          <h2 className="font-serif text-4xl leading-tight font-light text-text-primary md:text-5xl">
            Find your place
            <br />
            and <span className="italic">practice</span> here
          </h2>
        </ScrollReveal>

        {/* Link columns */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column, i) => (
            <ScrollReveal key={column.title} delay={i * 100}>
              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-text-tertiary">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <Divider className="mt-16" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href="#"
            className="font-serif text-xl font-semibold tracking-wide text-text-primary"
          >
            āsana
          </a>
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} āsana yoga studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
