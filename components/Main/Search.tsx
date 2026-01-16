import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <header className="bg-white border-b p-2 border-[#e1e7ea]">
      <div className="flex justify-end">
        <div className="relative max-w-md">
          <input
            type="search"
            placeholder="Search for books"
            className="w-80 h-10 px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
        </div>
      </div>
    </header>
  );
};

export default Search;
