import Link from "next/link";
import React from "react";

const SingleCard = () => {
  return (
    <div className="card w-[300px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden space-y-4 ring-1 ring-black">
      <div className="card-image w-full flex justify-center items-center">
        <img
          src={`https://picsum.photos/1920/1080?random=${Math.ceil(
            Math.random() * 10
          )}`}
          alt="image1"
        />
      </div>
      <div className="px-4 py-2 space-y-2">
        <div className="logo w-12 h-12 overflow-hidden">
          <img src="/logos/ups.jpeg" alt="ups" className="w-full h-full" />
        </div>

        <div className="flex-col flex space-y-5">
          <p className="line-clamp-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
            ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aliquam, ratione!
          </p>
          <Link
            href="#"
            className="btn text-blue-700 font-semibold flex justify-start items-center gap-x-2"
          >
            get the Story{" "}
            <span>
              <img src="svgs/arrow_right.svg" alt="arrow" className="card-arrow"/>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
