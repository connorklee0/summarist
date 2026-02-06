import BookDisplay from "../ui/BookDisplay";
import { Book } from "@/app/lib/api/books";

export default async function DisplayBooks({ data }: { data: Book[] }) {
  const booksToDisplay = data.slice(0, 5);

  return (
    <div className="flex my-10 overflow-auto">
      {booksToDisplay.map((book, index) => (
        <BookDisplay
          key={index}
          id={book.id}
          image={book.imageLink}
          audio={book.audioLink}
          title={book.title}
          author={book.author}
          subtitle={book.subTitle}
          rating={String(book.averageRating)}
          subscriptionRequired={book.subscriptionRequired ?? false}
        />
      ))}
    </div>
  );
}
