"use client"; // Required for Next.js 13+ with App Router

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      // pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <div className="scroll-item">1</div>
          </div>
          <div className="scroll-section">
            <div className="scroll-item">2</div>
          </div>
          <div className="scroll-section">
            <div className="scroll-item">3</div>
          </div>
          <div className="scroll-section">
            <div className="scroll-item">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
