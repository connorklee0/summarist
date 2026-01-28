import { FaRegDotCircle, FaRegCircle } from "react-icons/fa";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  isSelected,
  onClick,
}: PricingCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-6 p-6 rounded-lg border-4 cursor-pointer transition-all bg-gray-200 ${
        isSelected ? "border-green-500" : "border-gray-300"
      }`}
    >
      <div className="text-3xl">
        {isSelected ? <FaRegDotCircle /> : <FaRegCircle />}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#032b41]">{title}</h3>
        <p className="text-2xl font-bold text-[#032b41] mt-1">
          {price}/{period}
        </p>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PricingCard;
