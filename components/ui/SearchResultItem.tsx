"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { useAudioDuration } from "@/app/hooks/useAudioDuration";

interface SearchResult {
  id: string;
  title: string;
  author: string;
  imageLink?: string;
  subTitle?: string;
  audioLink?: string;
}

interface SearchResultItemProps {
  book: SearchResult;
  onResultClick: () => void;
}

export default function SearchResultItem({
  book,
  onResultClick,
}: SearchResultItemProps) {
  const duration = useAudioDuration(book.audioLink || "");

  return (
    <li className="border-b last:border-b-0 border-gray-300 mx-4">
      <Link
        href={`/book/${book.id}`}
        onClick={onResultClick}
        className="flex items-center gap-3 p-3 hover:bg-gray-100 transition"
      >
        {book.imageLink && (
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={book.imageLink}
              alt={book.title}
              fill
              className="object-cover rounded"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="font-semibold text-sm">{book.title}</p>
          <p className="text-xs text-gray-500">{book.author}</p>
          {book.audioLink && (
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <FaRegClock />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
}
