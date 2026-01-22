import { getSelectedBook } from "@/app/lib/api/books";
import SelectedBook from "@/components/ui/SelectedBook";

export default async function SelectedBookWrapper() {
  const selectedBook = await getSelectedBook();

  return <SelectedBook data={selectedBook} />;
}
