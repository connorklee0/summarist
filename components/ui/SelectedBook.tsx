"use client";

import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Book } from "@/app/lib/api/books";

const SelectedBook = ({ data }: { data: Book[] }) => {
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
    <a
      href={`book/${selectedBook.id}`}
      className="flex bg-[#efe1c3] md:max-w-160 rounded p-6 mb-6 gap-6 max-md:flex-col w-full max-w-full "
    >
      <div className="md:w-1/3">{selectedBook.subTitle}</div>
      <div className="w-px bg-[#bac8ce] max-md:hidden"></div>{" "}
      <div className="flex gap-4">
        <div className="relative w-35 h-35">
          <Image src={selectedBook.imageLink} alt="Selected Book" fill />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[24px] pb-1 truncate">
            {selectedBook.title}
          </p>
          <p className="text-[16px] pb-2 font-light">{selectedBook.author}</p>
          <div className="flex items-center gap-1">
            <FaCirclePlay className="text-[40px]" />
            <div className="text-[16px]">
              {minutes} mins {seconds} secs
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SelectedBook;
