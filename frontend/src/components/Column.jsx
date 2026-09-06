import TaskCard from "./TaskCard";

const Column = ({
  tasks,
  setTasks,
  setIsModalOpen,
  setIsEditing,
}) => {
  const tabs = [
    { label: "Todo", accent: "bg-sky-500", surface: "from-sky-50 to-white" },
    { label: "In-Progress", accent: "bg-amber-500", surface: "from-amber-50 to-white" },
    { label: "Completed", accent: "bg-emerald-500", surface: "from-emerald-50 to-white" },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
      {tabs.map(function (tab) {
        const columnTasks = tasks.filter((task) => task.status == tab.label);
        // rendering each tab
        return (
          <section
            key={tab.label}
            className={`kanban-column min-h-[520px] rounded-3xl border border-slate-200 bg-gradient-to-b ${tab.surface} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${tab.accent}`} />
                <h2 className="font-display text-xl font-bold tracking-tight text-slate-950">
                  {tab.label}
                </h2>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-500">
                {columnTasks.length}
              </span>
            </div>
            <div className="space-y-4">
              {columnTasks.length > 0 ? (
                columnTasks.map(function (task) {
                  return (
                    // rendering each task to its seperate column
                    <TaskCard
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      priority={task.priority}
                      assignee={task.assignee}
                      description={task.description}
                      status={task.status}
                      tasks={tasks}
                      setTasks={setTasks}
                      setIsModalOpen={setIsModalOpen}
                      setIsEditing={setIsEditing}
                    />
                  );
                })
              ) : (
                <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 px-5 text-center text-sm font-medium text-slate-400">
                  No tasks here yet
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Column;
