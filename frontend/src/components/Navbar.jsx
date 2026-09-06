import Searchbar from "./Searchbar";
import { Bell, LayoutDashboard } from "lucide-react";

const Navbar = (props) => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 px-6 py-4 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-300/80">
            <LayoutDashboard size={21} strokeWidth={2.2} />
          </div>
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-slate-950">
              Kanba
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              Team workspace
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Searchbar search={props.search} setSearch={props.setSearch} />
          <button
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:shadow-md active:translate-y-0"
            type="button"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>
          <button
            className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0"
            type="button"
          >
            Home
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
