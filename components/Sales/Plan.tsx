import { IoDocumentText } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const Plan = () => {
  return (
    <div>
      <div className="flex gap-16 justify-center">
        <div className="text-center items-center flex flex-col">
          <IoDocumentText className="text-6xl" />
          <span className="font-bold">Key Ideas in a few minutes</span> with
          many books to read
        </div>
        <div className="text-center items-center flex flex-col">
          <RiPlantFill className="text-6xl" />
          <span className="font-bold">3 million</span> people growing with
          Summarist everyday
        </div>
        <div className="text-center items-center flex flex-col">
          <FaHandshake className="text-6xl" />
          <span className="font-bold">Precise recommendations</span> collections
          curated by experts
        </div>
      </div>
    </div>
  );
};

export default Plan;
