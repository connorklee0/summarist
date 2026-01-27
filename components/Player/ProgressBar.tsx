"use client";

import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import { useAudioDuration } from "@/app/hooks/useAudioDuration";

export default function AudioProgressBar() {
  const {
    currentTrack,
    audioRef,
    progressBarRef,
    setTimeProgress,
    timeProgress,
  } = useAudioPlayerContext();

  const duration = useAudioDuration(currentTrack?.audioLink || "");

  const formatTime = (time: number): string => {
    if (typeof time === "number" && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
    return "00:00";
  };

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      const audioDuration = audioRef.current.duration;

      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);

      const progressPercent =
        (progressBarRef.current.valueAsNumber / progressBarRef.current.max) *
        100;

      if (audioDuration) {
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${progressPercent}%`
        );
      }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm w-12 text-right">
        {formatTime(timeProgress)}
      </span>
      <input
        ref={progressBarRef}
        type="range"
        onChange={handleProgressChange}
        min="0"
        max={audioRef.current?.duration || 0}
        value={timeProgress}
        className="h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer w-80 accent-white"
        style={{
          background: `linear-gradient(to right, #2bd97c var(--range-progress, 0%), #4a5568 var(--range-progress, 0%))`,
        }}
        aria-label="Audio progress"
      />
      <span className="text-sm w-12">{duration}</span>
    </div>
  );
}
