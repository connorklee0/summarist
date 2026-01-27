import AudioPlayer from "@/components/Player/AudioPlayer";
import { AudioPlayerProvider } from "@/app/context/AudioPlayerContext";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AudioPlayerProvider>
      <div className="pb-15 ml-30">{children}</div>
      <AudioPlayer />
    </AudioPlayerProvider>
  );
}
