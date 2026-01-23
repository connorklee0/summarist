import { getBookById } from "@/app/lib/api/books";
import Image from "next/image";
import BookDetails from "@/components/ui/BookDetails";
import { LuBookOpenText } from "react-icons/lu";
import { HiOutlineMicrophone } from "react-icons/hi";
import { RiBookmarkLine } from "react-icons/ri";

export default async function BookPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const book = await getBookById(id);

  console.log(book);
  return (
    <div className="container">
      <div className="row flex">
        <div className="flex flex-col gap-4 w-[70%]">
          <div className="font-bold text-4xl">{book.title}</div>
          <div className="font-bold text-xl">{book.author}</div>
          <div className="font-extralight text-xl">{book.subTitle}</div>
          <div className="border-b border-[#ced4d7]"></div>
          <BookDetails
            audioLink={book.audioLink}
            averageRating={book.averageRating}
            totalRating={book.totalRating}
            type={book.type}
            ideas={book.keyIdeas}
          />
          <div className="border-b border-[#ced4d7]"></div>
          <div className="flex gap-4">
            <button className="book--btn">
              <div className="flex items-center gap-2">
                <LuBookOpenText className="text-xl" />
                Read
              </div>
            </button>
            <button className="book--btn">
              <div className="flex items-center gap-2">
                <HiOutlineMicrophone className="text-xl" />
                Listen
              </div>
            </button>
          </div>
          <div className="text-[#0365f2] flex gap-2 items-center cursor-not-allowed">
            <RiBookmarkLine className="text-xl" />{" "}
            <p className="font-medium">Add title to My Library</p>
          </div>
          <div className="font-bold">What's it about?</div>
          <div className="flex gap-4">
            {book.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-[#cdd6d2d9] font-bold px-4 py-2 rounded "
              >
                {tag}
              </div>
            ))}
          </div>
          <p>{book.bookDescription}</p>
          <div className="font-bold">About the author</div>
          <p>{book.authorDescription}</p>
        </div>
        <div className="w-70 h-70 relative">
          <Image src={book.imageLink} alt={book.title} fill />
        </div>
      </div>
    </div>
  );
}
