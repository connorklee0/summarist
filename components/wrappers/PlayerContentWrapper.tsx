"use client";

import { useEffect } from "react";
import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import { useFontSize } from "@/app/context/FontSizeContext";

interface PlayerContentWrapperProps {
  book: any;
}

export default function PlayerContentWrapper({
  book,
}: PlayerContentWrapperProps) {
  const { fontSize } = useFontSize();
  const { setCurrentTrack, setIsPlaying } = useAudioPlayerContext();

  useEffect(() => {
    setCurrentTrack({
      id: book.id,
      title: book.title,
      author: book.author,
      audioLink: book.audioLink,
      imageLink: book.imageLink,
    });
    setIsPlaying(false);

    return () => {
      setIsPlaying(false);
    };
  }, [book, setCurrentTrack, setIsPlaying]);

  return (
    <div className="container pb-32">
      <div className="row summary">
        <p className="font-bold text-2xl">{book.title}</p>
        <div className="border-b border-[#ced4d7] my-4"></div>
        <div className={`py-4 whitespace-pre-line ${fontSize}`}>
          {book.summary}
        </div>
      </div>
    </div>
  );
}
