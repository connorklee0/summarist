"use client";

import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import { useEffect, useCallback, useRef } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { MdOutlineReplay10, MdOutlineForward10 } from "react-icons/md";

export default function Controls() {
  const { isPlaying, setIsPlaying, audioRef, progressBarRef, setTimeProgress } =
    useAudioPlayerContext();

  const playAnimationRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();

      const maxValue = parseFloat(progressBarRef.current.max) || 100;
      const progressPercent =
        (progressBarRef.current.valueAsNumber / maxValue) * 100;

      if (duration) {
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${progressPercent}%`
        );
      }
    }
  }, [setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, audioRef, progressBarRef]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startAnimation();
    } else {
      audioRef.current?.pause();
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }
    return () => {
      if (playAnimationRef.current !== null) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startAnimation, updateProgress, audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !progressBarRef.current) return;

    const handleEnded = () => {
      setIsPlaying(false);
      audio.currentTime = 0;
      setTimeProgress(0);
      if (progressBarRef.current) {
        progressBarRef.current.value = "0";
        progressBarRef.current.style.setProperty("--range-progress", "0%");
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, progressBarRef, setIsPlaying, setTimeProgress]);

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      updateProgress();
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
      updateProgress();
    }
  };

  return (
    <div className="flex items-center text-4xl">
      <button
        onClick={skipBackward}
        className="hover:text-gray-400 transition"
        aria-label="Skip backward 10 seconds"
      >
        <MdOutlineReplay10 />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-3 hover:bg-gray-700 rounded-full transition"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaCirclePause /> : <FaCirclePlay />}
      </button>
      <button
        onClick={skipForward}
        className="hover:text-gray-400 transition"
        aria-label="Skip forward 10 seconds"
      >
        <MdOutlineForward10 />
      </button>
    </div>
  );
}
