import { User } from "firebase/auth";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type SearchInputProps = {
  user?: User | null;
};

const SearchInput: React.FC<SearchInputProps> = ({user}) => {
  return (
    <form className={`flex flex-1 min-w-[100px] border-[1px] items-center mx-1 md:mx-2 w-auto  border-primary/40 rounded-e-2xl rounded-s-2xl grow items-center p-[1px]  hover:border-slate-100 transition-all duration-300 ease-in-out focus-within:border-slate-100`}>
      <AiOutlineSearch className="min-h-5 min-w-5 text-primary mx-1" />

      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-inherit focus:outline-none  .placeholder-primary/60 "
      />
      <button type="submit" hidden></button>

    </form>
  );
};
export default SearchInput;
