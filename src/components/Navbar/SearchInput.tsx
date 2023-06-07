import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <form className="flex border-[1px] border-primary/40 rounded-e-2xl rounded-s-2xl grow items-center p-[1px]  hover:border-slate-100 focus-within:border-slate-100">
      <AiOutlineSearch className="h-5 w-5 text-primary mx-1" />

      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-inherit focus:outline-none text-m .placeholder-primary/60 "
      />
      <button type="submit" hidden></button>

    </form>
  );
};
export default SearchInput;