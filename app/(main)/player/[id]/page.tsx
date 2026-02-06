import { Suspense } from "react";
import PlayerContentWrapper from "@/components/wrappers/PlayerContentWrapper";
import Spinner from "@/components/ui/Spinner";

export default function PlayerPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Spinner />}>
      <PlayerContentWrapper params={params} />
    </Suspense>
  );
}
