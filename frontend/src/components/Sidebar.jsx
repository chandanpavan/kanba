import { FolderKanban, Settings, UsersRound } from "lucide-react";

const Sidebar = () => {
  const items = [
    { label: "Projects", icon: FolderKanban, active: true },
    { label: "Teams", icon: UsersRound },
    { label: "Settings", icon: Settings },
  ];

  return (
    <aside className="sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 shrink-0 border-r border-slate-200/80 bg-white/70 px-4 py-6 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Sprint
        </p>
        <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-950">
          Product Design
        </h2>
        <p className="mt-1 text-sm text-slate-500">3 active columns</p>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
              active
                ? "bg-slate-950 text-white shadow-lg shadow-slate-300/80"
                : "text-slate-500 hover:bg-white hover:text-slate-950 hover:shadow-sm"
            }`}
            type="button"
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
