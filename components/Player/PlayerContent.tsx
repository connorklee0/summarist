import { getBookById } from "@/app/lib/api/books";
import PlayerContentWrapper from "@/components/wrappers/PlayerContentWrapper";

export default async function PlayerContent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const book = await getBookById(id);

  return <PlayerContentWrapper book={book} />;
}
