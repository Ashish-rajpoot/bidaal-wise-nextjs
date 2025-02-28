import LinkButton from "./Button";

const Hero = () => {
  return (
    <div
      className="w-screen bg-no-repeat bg-cover overflow-hidden relative min-h-screen"
      style={{ backgroundImage: "url('image3.jpg')" }}
    >
      {/* Ensure the overlay fully covers the section */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
      {/* Content */}
      <div className=" large-screen-padding relative z-10 flex flex-col  justify-center md:justify-end md:pb-40 text-textWhite w-screen min-h-screen gap-y-6 -mt-16 mob-def-pad 2xl:gap-16 gap-11">
        <div className="font-bold capitalize 2xl:text-6xl text-4xl">
          <h1>precise lighting</h1>
          <h1>for peak performance</h1>
        </div>
        <div className="text-xl 2xl:text-3xl">
          <p>Wise offers state-of-the-art solution</p>
          <p>(hardware-software) system to digitally</p>
          <p>record, store, visualize, and compile your</p>
          <p>illumination data in one place.</p>
        </div>
        <LinkButton href="/contact" className={"2xl:py-7 2xl:px-24 2xl:text-3xl"}>Contact us</LinkButton>
      </div>
    </div>
  );
};

export default Hero;
