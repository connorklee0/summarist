import AudioPlayer from "@/components/Player/AudioPlayer";
import { AudioPlayerProvider } from "@/app/context/AudioPlayerContext";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AudioPlayerProvider>
      <div className="pb-15 md:ml-30 max-md:pb-30">{children}</div>
      <AudioPlayer />
    </AudioPlayerProvider>
  );
}
