import { Suspense } from "react";
import BookPageContent from "@/components/Book/BookPageContent";
import BookPageSkeleton from "@/components/ui/skeleton/BookPageSkeleton";

export default function BookPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<BookPageSkeleton />}>
      <BookPageContent params={params} />
    </Suspense>
  );
}
