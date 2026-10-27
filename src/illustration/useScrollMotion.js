import { useEffect, useRef } from "react";

// Start entrances when their content is actually visible, including after images load.
export default function useScrollMotion(key) {
  const scope = useRef(null);
  useEffect(() => {
    const root = scope.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !root ||
      preference.matches ||
      !window.IntersectionObserver ||
      document.documentElement.dataset.inputMethod === "keyboard"
    )
      return;

    const nodes = [
      ...root.querySelectorAll(
        ".intro-copy, .mosaic > *, .intro-explore, .reason-heading, .reason-art, .ownership-art, .reason-content, .projects-intro, .project-card",
      ),
    ];
    const animations = [];
    let disposed = false;
    const reset = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      nodes.forEach((node) => delete node.dataset.motion);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async ({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          if (target.tagName === "IMG") {
            try {
              await target.decode();
            } catch {
              /* Keep broken images visible for fallback. */
            }
          }
          if (disposed || preference.matches) return;
          const tile = target.parentElement.classList.contains("mosaic");
          const delay = tile
            ? Math.min(
                [...target.parentElement.children].indexOf(target) * 65,
                650,
              )
            : 0;
          const from = target.classList.contains("project-card")
            ? "translateY(42px) scale(.96)"
            : tile
              ? "translateY(24px) scale(.94)"
              : "translateY(28px)";
          const animation = target.animate(
            [
              { opacity: 0, transform: from },
              { opacity: 1, transform: "translateY(0) scale(1)" },
            ],
            {
              duration: tile ? 650 : 760,
              delay,
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "both",
            },
          );
          animations.push(animation);
          target.dataset.motion = "playing";
          animation.finished
            .then(() => {
              if (disposed) return;
              delete target.dataset.motion;
              animation.cancel();
            })
            .catch(() => {});
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -32px 0px" },
    );
    nodes.forEach((node) => {
      node.dataset.motion = "waiting";
      observer.observe(node);
    });
    preference.addEventListener("change", reset);
    return () => {
      disposed = true;
      reset();
      preference.removeEventListener("change", reset);
    };
  }, [key]);
  return scope;
}
