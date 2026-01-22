import BookDisplaySkeleton from "./BookDisplaySkeleton";

export default function BookRowSkeleton() {
  return (
    <div className="flex my-10">
      {[...Array(5)].map((_, index) => (
        <BookDisplaySkeleton key={index} />
      ))}
    </div>
  );
}
