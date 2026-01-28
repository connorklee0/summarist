import { getSuggestedBooks } from "@/app/lib/api/books";
import BookRow from "../Main/BookRow";

export default async function SuggestedBooksWrapper() {
  const suggestedBooks = await getSuggestedBooks();
  return <BookRow data={suggestedBooks} />;
}
