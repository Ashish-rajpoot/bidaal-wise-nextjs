"use client"; // Required for Next.js 13+ with App Router

import { useRef, useEffect } from "react";

export default function HorizontalScroll() {
  const sectionRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="scroll-section-outer">
      <div ref={triggerRef} >
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
