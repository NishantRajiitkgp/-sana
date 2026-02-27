"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-hidden");
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const children = node.querySelectorAll(".scroll-hidden");
    children.forEach((child) => observer.observe(child));

    if (node.classList.contains("scroll-hidden")) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
