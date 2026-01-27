"use client";

import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import Image from "next/image";

export default function TrackInfo() {
  const { currentTrack } = useAudioPlayerContext();

  if (!currentTrack) return null;

  return (
    <div className="flex items-center gap-4">
      {currentTrack.imageLink && (
        <div className="w-12 h-12 relative">
          <Image
            src={currentTrack.imageLink}
            alt={currentTrack.title}
            fill
            className="rounded"
          />
        </div>
      )}
      <div>
        <p className="text-sm">{currentTrack.title}</p>
        <p className="text-sm text-gray-400">{currentTrack.author}</p>
      </div>
    </div>
  );
}
