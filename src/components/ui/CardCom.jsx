"use client";
import React, { useEffect, useState } from "react";

const demodata = [
  {
    content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          necessitatibus iusto quidem pariatur recusandae sunt numquam deserunt
          ab inventore quibusdam?`,
    imgUrl: "https://picsum.photos/1300/1200?random=1",
  },
];
const CardCom = ({ data = demodata[0] }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="flex overflow-hidden w-full h-[300px] relative justify-center items-center rounded-lg">
      <div className="text-base md:text-lg px-10 w-1/2 text-white">
        <p>{data.content}</p>
      </div>
      <div className="w-1/2 h-full scroll-my-0">
        <img src={data.imgUrl} alt="img" />
      </div>
    </div>
  );
};

export default CardCom;
