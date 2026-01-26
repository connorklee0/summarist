import { getBookById } from "@/app/lib/api/books";

export default async function PlayerContent({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const book = await getBookById(id);

  console.log(book);
  return (
    <div className="container">
      <div className="row">
        <p className="font-bold text-2xl">{book.title}</p>
        <div className="border-b border-[#ced4d7] my-4"></div>
        <div className="py-4 whitespace-pre-line">{book.summary}</div>
      </div>
    </div>
  );
}
