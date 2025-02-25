import Button from "./Button";

const Section1 = () => {
  return (
    <div
      className="w-screen bg-no-repeat max-md:pt-[28px] bg-cover"
      style={{ backgroundImage: "url('image3.jpg')" }}
      // style={{
      //   backgroundImage: "url('image3.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "right bottom",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex flex-col justify-center text-textWhite w-screen h-screen relative p-10 gap-y-6 -mt-16 ">
        <div className="shrink">
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
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
