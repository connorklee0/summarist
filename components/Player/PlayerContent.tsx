"use client";

import { useEffect } from "react";
import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import { useFontSize } from "@/app/context/FontSizeContext";
import { useAuth } from "@/app/context/AuthContext";
import LoginDisplay from "../ui/LoginDisplay";

interface PlayerContentProps {
  book: any;
}

export default function PlayerContent({ book }: PlayerContentProps) {
  const { fontSize } = useFontSize();
  const { setCurrentTrack, setIsPlaying } = useAudioPlayerContext();
  const { userData } = useAuth();

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

  const needPremium =
    book.subscriptionRequired && (!userData || userData.plan === "basic");

  return (
    <div className="container pb-32">
      <div className="row summary">
        <p className="font-bold text-2xl">{book.title}</p>
        <div className="border-b border-[#ced4d7] my-4"></div>
        {needPremium ? (
          <LoginDisplay description="Log in to your account to read and listen to the book" />
        ) : (
          <div className={`py-4 whitespace-pre-line ${fontSize}`}>
            {book.summary}
          </div>
        )}
      </div>
    </div>
  );
}
