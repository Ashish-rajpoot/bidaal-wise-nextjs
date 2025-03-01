"use client"; // For Next.js App Router
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavHeight } from "@/providers/NavContext";
import CardCom from "../ui/CardCom";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const smallDivsRef = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const { navHeight } = useNavHeight();

  useEffect(() => {
    setIsLoading(true); // ✅ Fix hydration issue
  }, []);

  useEffect(() => {
    if (!isLoading) return; // ✅ Wait until loading is complete

    const smallDivs = smallDivsRef.current.filter(Boolean); // Remove any empty refs
    const lastSmallDiv = smallDivs[smallDivs.length - 1];

    smallDivs.forEach((div, index) => {
      gsap.set(div, { opacity: 0 }); // Ensure elements start invisible

      ScrollTrigger.create({
        trigger: div,
        start: `top 45%`,
        onEnter: () => gsap.to(div, { opacity: 1, duration: 1 }),
        onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 1 }),
      });

      ScrollTrigger.create({
        trigger: div,
        start: `top ${ navHeight}px`,
        // start: `top 22%`,
        pin: true,
        endTrigger: lastSmallDiv,
        end: `top ${navHeight}px`,
        // end: `top 22%`,
        scrub: true,
      });
    });
  }, [isLoading, navHeight]);

  if (!isLoading) {
    return <div>Loading...</div>; // ✅ Fix hydration issue
  }

  return (
    <div className="gradient-tb">
      <div className="mob-def-pad lg-device">
        <div className=" flex flex-col gap-y-40">
          {/* First Card */}
          <div
            ref={(el) => (smallDivsRef.current[0] = el)}
            className="small-box rounded-lg bg-navBtnClr"
            style={{ zIndex: 1, opacity: 0 }}
          >
            <CardCom />
          </div>

          {/* Second Card */}
          <div
            ref={(el) => (smallDivsRef.current[1] = el)}
            className="small-box w-full min-h-[300px] bg-navBtnClr rounded-lg "
            style={{ zIndex: 2, opacity: 0 }}
          >
            {" "}
            <CardCom />
          </div>

          {/* Third Card */}
          <div
            ref={(el) => (smallDivsRef.current[2] = el)}
            className="small-box w-full min-h-[300px] bg-navBtnClr rounded-lg "
            style={{ zIndex: 3, opacity: 0 }}
          >
            {" "}
            <CardCom />
          </div>

          {/* Fourth Card */}
          <div
            ref={(el) => (smallDivsRef.current[3] = el)}
            className="small-box w-full min-h-[300px] bg-navBtnClr rounded-lg "
            style={{ zIndex: 4, opacity: 0 }}
          >
            {" "}
            <CardCom />
          </div>
        </div>
      </div>
    </div>
  );
}
