import { Suspense } from "react";
import SelectedBookWrapper from "@/components/wrappers/SelectedBookWrapper";
import SelectedBookSkeleton from "@/components/ui/skeleton/SelectedBookSkeleton";
import RecommendedBooksWrapper from "@/components/wrappers/RecommendedBooksWrapper";
import BookRowSkeleton from "@/components/ui/skeleton/BookRowSkeleton";
import SuggestedBooksWrapper from "@/components/wrappers/SuggestedBooksWrapper";

async function page() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="page--title">Selected just for you</div>
          <Suspense fallback={<SelectedBookSkeleton />}>
            <SelectedBookWrapper />
          </Suspense>
          <div>
            <div className="page--title">Recommended For You</div>
            <div className="page--subtitle">We think you'll like these</div>
            <Suspense fallback={<BookRowSkeleton />}>
              <RecommendedBooksWrapper />
            </Suspense>
          </div>

          <div>
            <div className="page--title">Suggested Books</div>
            <div className="page--subtitle">Browse these books</div>
            <Suspense fallback={<BookRowSkeleton />}>
              <SuggestedBooksWrapper />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
