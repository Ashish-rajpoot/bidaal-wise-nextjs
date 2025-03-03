import React from "react";

const CeoBanner = () => {
  return (
    <div className="flex flex-col justify-between gradient-lr w-full rounded-lg px-4 py-20 max-md:10 text-white text-center relative gap-14 max-md:flex-col">
      <div
        className="grow font-semibold flex flex-col capitalize text-xl"
        // style={{ wordSpacing: "0.2rem", letterSpacing: "0.01rem" }}
      >
        <p>If you're looking for industrial safety solutions, I don't think</p>
        <p>that there's a better-supported solution than Bidaal.</p>
      </div>
      <div className="max-md:text-base">
        <p>Ajay Kapur</p> <p>CEO, Adani Cements</p>
      </div>
      <div className="max-md:w-[250px] w-[300px] h-full overflow-hidden mx-auto absolute max-lg:relative -right-7 top-0 bottom-0 scale-110 transform -translate-y-3">
        <img src="person-png.png" alt="image" className="bg-transparent" />
      </div>
    </div>
  );
};

export default CeoBanner;
