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
    <div className="flex overflow-hidden w-full h-[300px] relative justify-center items-center rounded-lg max-md:flex-col max-md:h-fit gap-y-10 max-md:py-10">
      <div className="text-base lg:text-base max-md:px-4 px-10 w-1/2 text-white max-md:w-full max-md:text-center">
        <p className="max-md:line-clamp-4">{data.content}</p>
      </div>
      <div className="w-1/2 h-full scroll-my-0 flex justify-center items-center">
        <img src={data.imgUrl} alt="img" />
      </div>
    </div>
  );
};

export default CardCom;
