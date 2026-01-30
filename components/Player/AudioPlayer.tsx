"use client";

import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer() {
  const { currentTrack, audioRef } = useAudioPlayerContext();

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined && audioRef.current) {
      audioRef.current.setAttribute("data-duration", seconds.toString());
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2e2d2d] text-white px-10 z-100">
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.audioLink}
          onLoadedMetadata={onLoadedMetadata}
        />
      )}

      <div className="w-full py-4 mx-auto">
        <div className="flex items-center justify-between max-md:flex-col">
          <TrackInfo />
          <Controls />
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
