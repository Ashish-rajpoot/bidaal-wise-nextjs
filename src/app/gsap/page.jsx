"use client"; // For Next.js App Router
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const smallDivsRef = useRef([]);
  const images = [
    "https://picsum.photos/1300/344?random=1",
    "https://picsum.photos/1300/344?random=2",
    "https://picsum.photos/1300/344?random=3",
    "https://picsum.photos/1300/344?random=4",
  ];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // ✅ Fix hydration issue
  }, []);

  useEffect(() => {
    if (!isLoading) return; // ✅ Wait until loading is complete

    const smallDivs = [...smallDivsRef.current]; // ✅ Ensure correct order
    const lastSmallDiv = smallDivs[smallDivs.length - 1];

    smallDivs.forEach((div, index) => {
      // ✅ Set initial opacity and z-index order
      // gsap.set(div, { opacity: 0});

      // ✅ Show divs only when they cross 35% of Section 2
      ScrollTrigger.create({
        trigger: div,
        start: "top 35%",
        onEnter: () => gsap.to(div, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 0.5 }),
        markers: true,
      });

      // ✅ Pin the small divs until the last one reaches the top
      ScrollTrigger.create({
        trigger: div,
        start: "top top",
        pin: true,
        endTrigger: lastSmallDiv, // 🔥 Unpin when the last small div reaches the top
        end: "top top",
        scrub: true,
        markers: true, // Remove in production
      });
    });
  }, [isLoading]); // ✅ Runs only after loading is complete

  if (!isLoading) {
    return <div>Loading...</div>; // ✅ Fix hydration issue
  }

  return (
    <div className="flex flex-col">
      <div className="section section1 bg-cyan-500">Section 1</div>
      <div className="section section2 bg-yellow-200 flex flex-col gap-40">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (smallDivsRef.current[i] = el)}
            className="small-box bg-slate-500 w-full min-h-[200px] flex justify-center items-center"
            style={{ zIndex: i + 1, opacity: 0 }} // ✅ Ensures correct z-index from the start
          >
            <img
              src={`https://picsum.photos/1300/344?random=${i}`} // ✅ Avoids unnecessary re-renders
              alt="imag"
            />
          </div>
        ))}
      </div>

      <div className="section section3 bg-blue-500">Section 3</div>
      <div className="section section4 bg-green-200">Section 4</div>
    </div>
  );
}
