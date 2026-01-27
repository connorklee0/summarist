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

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2e2d2d] text-white px-10 z-50">
      <audio
        ref={audioRef}
        src={currentTrack.audioLink}
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="w-full py-4 mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full gap-60">
          <TrackInfo />
          <Controls />
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
