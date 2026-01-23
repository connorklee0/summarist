"use client";

import { FaRegClock, FaRegStar } from "react-icons/fa6";
import { HiOutlineMicrophone, HiOutlineLightBulb } from "react-icons/hi";
import { useAudioDuration } from "@/app/hooks/useAudioDuration";

interface BookDetailsProps {
  audioLink: string;
  averageRating: number;
  totalRating: number;
  type: string;
  ideas: number;
}

export default function BookDetails({
  audioLink,
  averageRating,
  totalRating,
  type,
  ideas,
}: BookDetailsProps) {
  const duration = useAudioDuration(audioLink);

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <FaRegStar className="text-xl" />
          <p className="text-sm">
            {averageRating} ({totalRating} ratings)
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <HiOutlineMicrophone className="text-xl" />
          <p className="text-sm">{type}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <FaRegClock className="text-xl" />
          <p className="text-sm">{duration}</p>
        </div>
        <div className="flex gap-2 items-center">
          <HiOutlineLightBulb className="text-xl" />
          <p className="text-sm">{ideas} Key Ideas</p>
        </div>
      </div>
    </div>
  );
}
