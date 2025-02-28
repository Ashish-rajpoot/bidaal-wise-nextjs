import Link from "next/link";

const SingleCard = ({ image }) => {
  return (
    <div className="w-full h-[450px] relative ring-1 ring-black rounded-lg overflow-hidden">
      <div className="card-image w-full h-[200px] flex justify-center items-center overflow-hidden bg-red-500">
        <img src={image} alt="image1" className="w-full h-full" />
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
              <img
                src="svgs/arrow_right.svg"
                alt="arrow"
                className="card-arrow"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
