import { getRecommendedBooks } from "@/app/lib/api/books";
import BookRow from "../Main/BookRow";

export default async function RecommendedBooksWrapper() {
  const recommendedBooks = await getRecommendedBooks();
  return <BookRow data={recommendedBooks} />;
}
