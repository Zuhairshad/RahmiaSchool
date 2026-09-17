"use client";
import { useEffect } from "react";

export default function AnimationObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = Array.from(document.querySelectorAll("[data-animate]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.animateDelay ?? 0);
            const run = () => entry.target.classList.add("in-view");
            delay ? setTimeout(run, delay) : run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
