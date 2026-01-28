"use client";

import Image from "next/image";
import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { useAudioDuration } from "@/app/hooks/useAudioDuration";
import { useAuth } from "@/app/context/AuthContext";

interface BookProps {
  id: string;
  image: string;
  audio: string;
  title: string;
  author: string;
  subtitle: string;
  rating: string;
  subscriptionRequired: boolean;
}

const BookDisplay = ({
  id,
  image,
  audio,
  title,
  author,
  subtitle,
  rating,
  subscriptionRequired,
}: BookProps) => {
  const duration = useAudioDuration(audio);
  const { userData } = useAuth();

  return (
    <a href={`book/${id}`} className="w-55 ">
      <div className="flex flex-col mr-8 gap-1 hover:bg-[#c3bebe81] rounded">
        <div className="flex justify-end relative">
          <div className="text-xs bg-black text-white w-15 text-center rounded-2xl absolute z-5 -top-6 right-6">
            {subscriptionRequired &&
              (userData?.plan === "basic" || !userData) &&
              "Premium"}
          </div>
        </div>
        <div className="relative w-40 h-40 px-4 mx-auto">
          <Image src={image} alt={title} fill />
        </div>
        <p className="font-bold text-[20px]">{title}</p>
        <p className="font-extralight text-[16px]">{author}</p>
        <p className="text-[16px]">{subtitle}</p>
        <div className="flex">
          <div className="font-extralight text-[16px] flex items-center gap-1 pr-3">
            <FaRegClock />
            {duration}
          </div>
          <div className="font-extralight text-[16px] flex items-center gap-1">
            <FaRegStar />
            {rating}
          </div>
        </div>
      </div>
    </a>
  );
};

export default BookDisplay;
