import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useHorizontalScroll = (enabled = false) => {
  useEffect(() => {
    if (!enabled) return;

    const width = window.innerWidth;
    if (width <= 1023) return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");
    const container = document.querySelector(".thecontainer") as HTMLDivElement;

    if (!container || sections.length === 0) return;

    const animation = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => "+=" + container.offsetWidth,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [enabled]);
};

export default useHorizontalScroll;
