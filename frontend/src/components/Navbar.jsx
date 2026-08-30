import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="mt-2 flex items-center justify-between px-4">
      <div className="text-2xl text-amber-300">Kanba</div>
      <div className="flex flex-row items-center gap-10">
        <button className="text-2xl active:scale-95 cursor-pointer">
          Home
        </button>
        <Searchbar />
      </div>
    </div>
  );
};

export default Navbar;
