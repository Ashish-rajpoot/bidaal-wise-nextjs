import React from "react";

const CeoBanner = () => {
  return (
    <div className="flex flex-col justify-between gradient-lr w-full rounded-lg p-4 text-white text-center text-[1.6rem] relative gap-14 max-md:flex-col">
      <div
        className="grow font-semibold flex flex-col"
        style={{ wordSpacing: "0.2rem", letterSpacing: "0.01rem" }}
      >
        <p>If you're looking for industrial safety solutions, I don't think</p>
        <p>that there's a better-supported solution than Bidaal.</p>
      </div>
      <div>
        <p>Ajay Kapur</p> <p>CEO, Adani Cements</p>
      </div>
      <div className="w-[250px] h-full overflow-hidden mx-auto absolute max-lg:relative -right-7 top-0 scale-110 transform -translate-y-3">
        <img src="person-png.png" alt="image" className="bg-transparent" />
      </div>
    </div>
  );
};

export default CeoBanner;
