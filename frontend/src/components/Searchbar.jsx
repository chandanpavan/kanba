import { useState } from "react";
import { Search } from "lucide-react";

const Searchbar = (props) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div className="hidden md:block">
      <form
        className="group flex w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition-all duration-200 focus-within:border-slate-300 focus-within:bg-white focus-within:shadow-md"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Search
          size={18}
          className="text-slate-400 transition-colors group-focus-within:text-slate-700"
        />
        <input
          onChange={(e) => {
            setText(e.target.value);
            props.setSearch(e.target.value);
          }}
          value={text}
          required
          placeholder="Search tasks..."
          className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
          type="text"
        />
        <button className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-200 hover:text-slate-950 active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
