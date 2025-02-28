import LinkButton from "./Button";

const Hero = () => {
  return (
    <div
      className="w-screen bg-no-repeat max-md:pt-[28px] bg-cover def-style"
      style={{ backgroundImage: "url('image3.jpg')" }}
    >
      <div className="flex flex-col justify-center text-textWhite w-screen min-h-screen relative gap-y-6 -mt-16 mob-def-pad ">
        <div className="text-[2.8rem] font-bold capitalize">
          <h1>precise lighting</h1>
          <h1>for peak performance</h1>
        </div>
        <div className="text-[1.3rem]">
          <p>Wise offers state-of-the-art solution</p>
          <p>(hardware-software) system to digitally</p>
          <p>record,store,visualize, and compile your</p>
          <p>illumination data in one place.</p>
        </div>
        <LinkButton>Contact us</LinkButton>
      </div>
    </div>
  );
};

export default Hero;
