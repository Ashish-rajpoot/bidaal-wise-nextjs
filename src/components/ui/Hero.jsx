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
      <div className="lg-device relative z-10 flex flex-col  justify-center md:justify-end md:pb-40 text-textWhite w-screen min-h-screen   gap-y-6 -mt-4 mob-def-pad gap-11">
        <div className="max-w-80 flex flex-col gap-y-5">
          <div className="font-bold capitalize max-lg:text-3xl text-6xl">
            <h1>precise lighting <br /> for peak performance</h1>
          </div>
          <div className="text-base">
            <p>Wise offers state-of-the-art solution</p>
            <p>(hardware-software) system to digitally</p>
            <p>record, store, visualize, and compile your</p>
            <p>illumination data in one place.</p>
          </div>
          <LinkButton href="/contact" className={""}>
            Contact us
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
