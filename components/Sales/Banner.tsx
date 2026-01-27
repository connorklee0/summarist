import Sales from "@/public/sales/sales.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-120 relative">
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-[#032b41] rounded-b-[16rem]"></div>
      <div className="text-center py-12 flex flex-col gap-10 w-240 mx-auto text-white">
        <div className="text-5xl font-bold">
          Get unlimited access to many amazing books to read
        </div>
        <div className="text-xl">
          Turn ordinary moments into amazing learning opportunities
        </div>
      </div>
      <div className="flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden">
        <Image src={Sales} alt="Sales page image" />
      </div>
    </div>
  );
};

export default Banner;
