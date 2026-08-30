import { useState } from "react";

const Searchbar = () => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div>
      <form
        className="flex items-center gap-3"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          required
          placeholder="Start typing.."
          className="rounded p-3 text-xl outline-white"
          type="text"
        />
        <button className="rounded-xl p-3 text-2xl cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
