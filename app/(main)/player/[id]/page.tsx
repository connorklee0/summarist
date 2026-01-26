import { Suspense } from "react";
import PlayerContent from "@/components/Player/PlayerContent";
import Spinner from "@/components/ui/Spinner";

export default function PlayerPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Spinner />}>
      <PlayerContent params={params} />
    </Suspense>
  );
}
