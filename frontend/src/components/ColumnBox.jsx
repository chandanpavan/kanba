import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

const ColumnBox = ({ tab, tasks, setTasks, setIsModalOpen, setIsEditing }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: tab.label,
  });
  const columnTasks = tasks.filter((task) => task.status === tab.label);

  return (
    <section
      ref={setNodeRef}
      key={tab.label}
      className={`kanban-column min-h-[520px] rounded-3xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isOver
          ? "border-cyan-400 bg-cyan-50/80 ring-4 ring-cyan-100"
          : `border-slate-200 bg-gradient-to-b ${tab.surface}`
      }`}
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
};

export default ColumnBox;
