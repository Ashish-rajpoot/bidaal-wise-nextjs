"use client"; // For Next.js App Router
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sectionRef = useRef(null);
  const smallDivsRef = useRef([]);

  useEffect(() => {
    let sections = gsap.utils.toArray(".divsection");

    sections.forEach((section, index) => {
      if (index === 1) {
        // Pin the second section
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          end: "+=300%", // Keeps pinned longer to allow small divs animation
          scrub: true,
        });

        // Animate small divs upward one by one
        gsap.to(smallDivsRef.current, {
          y: "-300px", // Move them up in Y-axis
          stagger: 0.5, // Delay between each animation
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="divsection">Section 1</div>
      <div className="divsection">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (smallDivsRef.current[i] = el)}
            className="small-box bg-yellow-500"
          >
            Small Div {i + 1}
          </div>
        ))}
      </div>
      <div className="divsection">Section 3</div>
      <div className="divsection">Section 4</div>
    </div>
    // <div className="container flex flex-col">
    //   {/* First Section */}
    //   <div className="section bg-red-500">1st Section</div>

    //   {/* Second Section with Small Divs */}
    //   <div className="section bg-blue-500" ref={sectionRef}>
    //     <div className="small-container">
    //       {Array.from({ length: 4 }).map((_, i) => (
    //         <div
    //           key={i}
    //           ref={(el) => (smallDivsRef.current[i] = el)}
    //           className="small-box bg-yellow-500"
    //         >
    //           Small Div {i + 1}
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Third & Fourth Sections */}
    //   <div className="section bg-green-500">3rd Section</div>
    //   <div className="section bg-purple-500">4th Section</div>
    // </div>
  );
}
