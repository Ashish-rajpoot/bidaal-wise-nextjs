"use client"; // For Next.js App Router
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavHeight } from "@/providers/NavContext";
import CardCom from "@/components/ui/CardCom";
import { generateRandomData } from "@/utils/utils";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const smallDivsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const { navHeight } = useNavHeight();
  const cardData = generateRandomData();

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const smallDivs = [...smallDivsRef.current];
    const lastSmallDiv = smallDivs[smallDivs.length - 1];

    ScrollTrigger.matchMedia({
      // ✅ Pin on larger screens (default behavior)
      "(min-width: 768px)": function () {
        smallDivs.forEach((div, index) => {
          ScrollTrigger.create({
            trigger: div,
            start: "top 50%",
            onEnter: () => gsap.to(div, { opacity: 1, duration: 0.3 }),
            onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 0.3 }),
          });

          ScrollTrigger.create({
            trigger: div,
            start: `top ${navHeight}px`,
            pin: true,
            endTrigger: lastSmallDiv,
            end: `top ${navHeight}px`,
            scrub: true,
          });
        });
      },

      // ✅ Pin on mobile but adjust spacing
      "(max-width: 767px)": function () {
        smallDivs.forEach((div, index) => {
          ScrollTrigger.create({
            trigger: div,
            start: "top 60%", // Adjust for better mobile scrolling
            onEnter: () => gsap.to(div, { opacity: 1, duration: 0.3 }),
            onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 0.3 }),
          });

          ScrollTrigger.create({
            trigger: div,
            start: `top ${navHeight}px`, // Adjust to avoid glitches
            pin: true,
            pinSpacing: false, // ✅ Fix blank space issue on mobile
            endTrigger: lastSmallDiv,
            end: `top ${navHeight}px`,
            scrub: true,
          });
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, [isLoading, navHeight]);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gradient-tb">
      <div className="mob-def-pad lg-device">
        <div className="flex flex-col gap-40 max-md:gap-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (smallDivsRef.current[i] = el)}
              className="small-box w-full min-h-[300px] rounded-lg bg-navBtnClr"
              style={{ zIndex: 1, opacity: 0 }}
            >
              <CardCom data={cardData[i]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
