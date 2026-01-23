"use client";

import { useEffect, useState } from "react";

export const useAudioDuration = (audioUrl: string) => {
  const [duration, setDuration] = useState<string>("--:--");

  useEffect(() => {
    const audioElement = new Audio(audioUrl);
    
    const handleLoadedMetadata = () => {
      const minutes = Math.floor(audioElement.duration / 60);
      const seconds = Math.floor(audioElement.duration % 60);
      setDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioUrl]);

  return duration;
};