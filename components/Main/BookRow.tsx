import BookDisplay from "../ui/BookDisplay";

export default async function DisplayBooks({ data }) {
  const booksToDisplay = data.slice(0, 5);

  return (
    <div className="flex my-10">
      {booksToDisplay.map((book, index) => (
        <BookDisplay
          key={index}
          id={book.id}
          image={book.imageLink}
          audio={book.audioLink}
          title={book.title}
          author={book.author}
          subtitle={book.subTitle}
          rating={book.averageRating}
          subscriptionRequired={book.subscriptionRequired}
        />
      ))}
    </div>
  );
}
