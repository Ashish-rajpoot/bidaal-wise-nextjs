This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




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
            markers:true
          },
        });
      }
    });
  }, []);


  "use client"; // For Next.js App Router
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavHeight } from "@/providers/NavContext";

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

    const data = document.querySelectorAll(".section");
    smallDivsRef.current.push(data);
    console.log(smallDivsRef.current);

    const smallDivs = [...smallDivsRef.current]; // ✅ Ensure correct order
    const lastSmallDiv = smallDivs[smallDivs.length - 1];

    smallDivs.forEach((div, index) => {
      // ✅ Set initial opacity and z-index order
      // gsap.set(div, { opacity: 0});

      // ✅ Show divs only when they cross 35% of Section 2
      ScrollTrigger.create({
        trigger: div,
        start: "top 55%",
        onEnter: () => gsap.to(div, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 0.5 }),
      });

      // ✅ Pin the small divs until the last one reaches the top
      ScrollTrigger.create({
        trigger: div,
        start: `top ${navHeight}px`,
        pin: true,
        endTrigger: lastSmallDiv, // 🔥 Unpin when the last small div reaches the top
        end: `top ${navHeight}px`,
        scrub: true,
      });
    });
  }, [isLoading]); // ✅ Runs only after loading is complete

  if (!isLoading) {
    return <div>Loading...</div>; // ✅ Fix hydration issue
  }

  return (
    <div className="gradient-tb">
      <div className="mob-def-pad">
        {/* <div className=" flex flex-col gap-40 "> */}
        {/* {Array.from({ length: 4 }).map((_, i) => ( */}
        <div
          //   key={i}
          //   ref={(el) => (smallDivsRef.current[i] = el)}
          className="small-box w-full min-h-[300px] flex justify-center items-center"
          style={{ zIndex: 1, opacity: 0 }} // ✅ Ensures correct z-index from the start
        >
          <div
            className="section grid grid-cols-2"
            style={{ zIndex: 1, opacity: 0 }}
          >
            <div className="text-xl text-white  pr-32 text-justify justify-items-center content-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate maxime recusandae rerum quae sint ipsa ea molestiae
              exercitationem rem suscipit dolore vero quo minus accusantium
              assumenda repellat sapiente, ipsam nihil.
            </div>
            <div className="">
              <img
                src={`https://picsum.photos/1300/344?random=1`} // ✅ Avoids unnecessary re-renders
                alt="imag"
              />
            </div>
          </div>

          <div
            className="section grid grid-cols-2"
            style={{ zIndex: 1, opacity: 0 }}
          >
            <div className="text-xl text-white  pr-32 text-justify justify-items-center content-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate maxime recusandae rerum quae sint ipsa ea molestiae
              exercitationem rem suscipit dolore vero quo minus accusantium
              assumenda repellat sapiente, ipsam nihil.
            </div>
            <div className="">
              <img
                src={`https://picsum.photos/1300/344?random=1`} // ✅ Avoids unnecessary re-renders
                alt="imag"
              />
            </div>
          </div>

          <div
            className="section grid grid-cols-2"
            style={{ zIndex: 1, opacity: 0 }}
          >
            <div className="text-xl text-white  pr-32 text-justify justify-items-center content-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate maxime recusandae rerum quae sint ipsa ea molestiae
              exercitationem rem suscipit dolore vero quo minus accusantium
              assumenda repellat sapiente, ipsam nihil.
            </div>
            <div className="">
              <img
                src={`https://picsum.photos/1300/344?random=1`} // ✅ Avoids unnecessary re-renders
                alt="imag"
              />
            </div>
          </div>

          <div
            className="section grid grid-cols-2"
            style={{ zIndex: 1, opacity: 0 }}
          >
            <div className="text-xl text-white  pr-32 text-justify justify-items-center content-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate maxime recusandae rerum quae sint ipsa ea molestiae
              exercitationem rem suscipit dolore vero quo minus accusantium
              assumenda repellat sapiente, ipsam nihil.
            </div>
            <div className="">
              <img
                src={`https://picsum.photos/1300/344?random=1`} // ✅ Avoids unnecessary re-renders
                alt="imag"
              />
            </div>
          </div>
          {/* </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}








**********************************
**********************************
**********************************
**********************************
**********************************

"use client"; // For Next.js App Router
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavHeight } from "@/providers/NavContext";

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

    const smallDivs = [...smallDivsRef.current]; // ✅ Ensure correct order
    const lastSmallDiv = smallDivs[smallDivs.length - 1];
    console.log(smallDivs)
    console.log(lastSmallDiv)
    console.log(smallDivsRef)

    smallDivs.forEach((div, index) => {
      // ✅ Set initial opacity and z-index order
      // gsap.set(div, { opacity: 0});

      // ✅ Show divs only when they cross 35% of Section 2
      ScrollTrigger.create({
        trigger: div,
        start: "top 55%",
        onEnter: () => gsap.to(div, { opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to(div, { opacity: 0, duration: 0.5 }),
      });

      // ✅ Pin the small divs until the last one reaches the top
      ScrollTrigger.create({
        trigger: div,
        start: `top ${navHeight}px`,
        pin: true,
        endTrigger: lastSmallDiv, // 🔥 Unpin when the last small div reaches the top
        end: `top ${navHeight}px`,
        scrub: true,
      });
    });
  }, [isLoading]); // ✅ Runs only after loading is complete

  if (!isLoading) {
    return <div>Loading...</div>; // ✅ Fix hydration issue
  }

  return (
    <div className="gradient-tb">
      <div className="mob-def-pad">
        <div className="section section2 flex flex-col gap-40 ">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (smallDivsRef.current[i] = el)}
              className="small-box w-full min-h-[300px] flex justify-center items-center"
              style={{ zIndex: i + 1, opacity: 0 }} // ✅ Ensures correct z-index from the start
            >
              <div>
                <div className="grid grid-cols-2">
                  <div className="text-xl text-white  pr-32 text-justify justify-items-center content-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate maxime recusandae rerum quae sint ipsa ea
                    molestiae exercitationem rem suscipit dolore vero quo minus
                    accusantium assumenda repellat sapiente, ipsam nihil. 
                  </div>
                  <div className="">
                    <img
                      src={`https://picsum.photos/1300/344?random=${i}`} // ✅ Avoids unnecessary re-renders
                      alt="imag"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


**********************************
**********************************
**********************************
**********************************
**********************************
**********************************
**********************************
**********************************
**********************************
**********************************
**********************************