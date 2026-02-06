import { getBookById } from "@/app/lib/api/books";
import PlayerContent from "@/components/Player/PlayerContent";

export default async function PlayerContentWrapper({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const book = await getBookById(id);

  return <PlayerContent book={book} />;
}
