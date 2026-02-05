"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { searchBooks } from "@/app/lib/api/books";
import SearchResultItem from "../ui/SearchResultItem";
import { useSidebar } from "@/app/context/SideBarContext";

interface SearchResult {
  id: string;
  title: string;
  author: string;
  imageLink?: string;
  subTitle?: string;
  audioLink?: string;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const debounceTimer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const data = await searchBooks(searchQuery);
        setSearchResults(data);
        setShowResults(true);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <header className="bg-white border-b p-4 border-[#ced4d7]">
      <div className="flex items-center sm:gap-4 px-4 py-3 sm:py-4 sm:max-w-[70%] gap-2 justify-end">
        <div className="relative flex-1 max-w-sm" ref={searchRef}>
          <input
            type="search"
            placeholder="Search for books"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery && setShowResults(true)}
            className="w-full h-10 px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#e5e4e4] text-sm sm:text-base mx-auto"
          />
          <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />

          {showResults && (
            <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((book) => (
                    <SearchResultItem
                      key={book.id}
                      book={book}
                      onResultClick={handleResultClick}
                    />
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-xl">No books found</div>
              )}
            </div>
          )}
        </div>
        <button onClick={toggleSidebar}>
          <RxHamburgerMenu className="text-3xl md:hidden" />
        </button>
      </div>
    </header>
  );
};

export default Search;
