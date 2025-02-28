"use client"; // Ensure this runs on the client side

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ scrollData }) {
  const imageRef = useRef(null);
  const boxesRef = useRef([]);
  const contentRef = useRef(null);
  const [currentImage, setCurrentImage] = useState("image1.jpg");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (scrollData.length > 0) {
      setCurrentImage(scrollData[0].image);
      gsap.set(imageRef.current, { opacity: 1, scale: 1 });
    }

    boxesRef.current.forEach((box, index) => {
      ScrollTrigger.create({
        trigger: box,
        scroller: contentRef.current,
        start: "48% center",
        end: "60% center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          const newImage = box.getAttribute("data-image");
          setCurrentImage(newImage);
          gsap.to(imageRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });
        },
        onEnterBack: () => {
          const prevImage = boxesRef.current[index]?.getAttribute("data-image");
          if (prevImage) {
            setCurrentImage(prevImage);
            gsap.to(imageRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });
          }
        },
        markers: false,
      });
    });

    gsap.to(contentRef.current, {
      scrollTop: contentRef.current.scrollHeight, // Scrolls to the bottom
      duration: 15, // Adjust speed
      ease: "linear",
      repeat: 1, // Infinite loop
      yoyo: true, // Scrolls back up
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="container" >
      <div className="content cursor-pointer"  ref={contentRef}>
        {scrollData.map((data, index) => (
          <div
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            className="box"
            data-image={data.image}
          >
            {data.content}
          </div>
        ))}
      </div>
      <div className="image-container">
        <img ref={imageRef} src={currentImage} alt="Dynamic Image" className="rounded-lg" />
      </div>
    </div>
  );
}
