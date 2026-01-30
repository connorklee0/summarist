"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BookDetails from "@/components/ui/BookDetails";
import { LuBookOpenText } from "react-icons/lu";
import { HiOutlineMicrophone } from "react-icons/hi";
import { RiBookmarkLine } from "react-icons/ri";
import BookPageSkeleton from "../ui/skeleton/BookPageSkeleton";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";
import { getBookById } from "@/app/lib/api/books";

export default function BookPageContent({
  params,
}: {
  params: { id: string };
}) {
  const { userData, loading: authLoading } = useAuth();
  const { openLoginModal } = useModal();
  const router = useRouter();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { id } = await params;
        setLoading(true);
        setError(null);
        const bookData = await getBookById(id);
        setBook(bookData);
      } catch (error) {
        console.error("Failed to fetch book:", error);
        setError("Failed to load book. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (params) {
      fetchBook();
    }
  }, [params]);

  if (loading || authLoading) {
    return <BookPageSkeleton />;
  }

  if (error) {
    return (
      <div className="container flex justify-center items-center min-h-100">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button onClick={() => window.location.reload()} className="btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container flex justify-center items-center min-h-100">
        <div className="text-xl">Book not found</div>
      </div>
    );
  }

  const handleReadClick = () => {
    if (!userData) {
      openLoginModal();
    } else if (userData.plan === "basic") {
      router.push("/choose-plan");
    } else {
      router.push(`/player/${book.id}`);
    }
  };

  return (
    <div className="container">
      <div className="row flex flex-col md:flex-row gap-6 max-md:items-center">
        <div className="w-70 h-70 relative md:hidden">
          <Image src={book.imageLink} alt={book.title} fill />
        </div>
        <div className="flex flex-col gap-4 md:w-[70%] w-full md:pr-4">
          <div className="font-bold text-4xl flex max-md:text-2xl">
            {book.title}
            {book.subscriptionRequired &&
              (userData?.plan === "basic" || !userData) &&
              " (Premium)"}
          </div>

          <div className="font-bold text-xl max-md:text-lg">{book.author}</div>
          <div className="font-extralight text-xl max-md:text-lg">
            {book.subTitle}
          </div>
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
            <a
              className="flex items-center gap-2 book--btn"
              onClick={handleReadClick}
            >
              <LuBookOpenText className="text-xl" />
              Read
            </a>

            <a
              className="flex items-center gap-2 book--btn"
              onClick={handleReadClick}
            >
              <HiOutlineMicrophone className="text-xl" />
              Listen
            </a>
          </div>

          <div className="text-[#0365f2] flex gap-2 items-center cursor-not-allowed">
            <RiBookmarkLine className="text-xl" />
            <p className="font-medium">Add title to My Library</p>
          </div>

          <div className="font-bold">What's it about?</div>
          <div className="flex gap-4">
            {book.tags.map((tag: string, index: number) => (
              <div
                key={index}
                className="bg-[#cdd6d2d9] font-bold px-4 py-2 rounded max-md:text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="max-md:text-sm">{book.bookDescription}</p>

          <div className="font-bold">About the author</div>
          <p className="max-md:text-sm">{book.authorDescription}</p>
        </div>

        <div className="w-70 h-70 relative max-md:hidden">
          <Image src={book.imageLink} alt={book.title} fill />
        </div>
      </div>
    </div>
  );
}
