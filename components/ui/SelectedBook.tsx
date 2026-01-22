"use client";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect, useState } from "react";

const SelectedBook = ({ data }) => {
  const selectedBook = data[0];
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (!selectedBook?.audioLink) return;

    const audioElement = new Audio(selectedBook.audioLink);

    const handleLoadedMetadata = () => {
      const mins = Math.floor(audioElement.duration / 60);
      const secs = Math.floor(audioElement.duration % 60);
      setMinutes(mins);
      setSeconds(secs);
    };

    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [selectedBook]);

  return (
    <div className="flex gap-4">
      <div className="relative w-35 h-35">
        <Image src={selectedBook.imageLink} alt="Selected Book" fill />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-[24px] pb-1">{selectedBook.title}</p>{" "}
        <p className="text-[16px] pb-2 font-light">{selectedBook.author}</p>
        <div className="flex items-center gap-1">
          <FaCirclePlay className="text-[40px]" />
          <div className="text-[16px]">
            {minutes} mins {seconds} secs
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
