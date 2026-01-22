import SelectedBook from "@/components/ui/SelectedBook";
import DisplayBooks from "@/components/Main/BookRow";
import { getSelectedBook } from "@/app/lib/api/books";
import { getRecommendedBooks } from "@/app/lib/api/books";
import { getSuggestedBooks } from "@/app/lib/api/books";

async function page() {
  const selectedBook = await getSelectedBook();
  const recommendedBooks = await getRecommendedBooks();
  const suggestedBooks = await getSuggestedBooks();

  return (
    <div className="container">
      <div className="row">
        <div>
          <div className="page--title">Selected just for you</div>
          <a
            href={`book/${selectedBook[0].id}`}
            className="flex justify-between w-160 bg-[#efe1c3] rounded p-6 mb-6 gap-6"
          >
            <div className="w-1/3">
              How Constant Innovation Creates Radically Successful Businesses
            </div>
            <div className="w-px bg-[#bac8ce]"></div>
            <SelectedBook data={selectedBook} />
          </a>

          <div>
            <div className="page--title">Recommended For You</div>
            <div className="page--subtitle">We think you'll like these</div>
            <DisplayBooks data={recommendedBooks} />
          </div>

          <div>
            <div className="page--title">Suggested Books</div>
            <div className="page--subtitle">Browse these books</div>
            <DisplayBooks data={suggestedBooks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
