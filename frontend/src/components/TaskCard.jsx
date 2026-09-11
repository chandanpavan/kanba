import { Pencil, Trash2, UserRound } from "lucide-react";
import toast from "react-hot-toast";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({
  id,
  title,
  priority,
  assignee,
  description,
  tasks,
  setTasks,
  setIsModalOpen,
  setIsEditing,
  status,
}) => {
  const priorityClasses = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-green-100 text-green-700",
  };

  const deleteTask = () => {
    const currId = id;
    {
      const updatedTasks = tasks.filter((task) => task.id != currId);
      setTasks(updatedTasks);
    }
    toast.success("Task Deleted");
  };

  const editTask = () => {
    setIsEditing({
      id,
      title,
      description,
      priority,
      assignee,
      status,
    });
    setIsModalOpen(true);
  };

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`cursor-grab touch-none active:cursor-grabbing ${
        isDragging ? "z-10 opacity-50" : ""
      }`}
    >
      <article className="task-card rounded-2xl border border-slate-200 bg-white p-4 text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-slate-950 capitalize">
            {title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
              priorityClasses[priority] || "bg-slate-100 text-slate-700"
            }`}
          >
            {priority}
          </span>
        </div>

        <div>
          <p className="mb-4 text-sm leading-6 text-slate-500 capitalize">
            {description}
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <UserRound size={16} />
            </span>
            <span className="text-slate-700 capitalize">{assignee}</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
            {status}
          </span>
          <div className="flex items-center gap-2">
            <button
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => {
                deleteTask();
              }}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-rose-500 transition-all duration-200 hover:bg-rose-50 hover:text-rose-600 active:scale-95"
              type="button"
              aria-label="Delete task"
            >
              <Trash2 size={17} />
            </button>
            <button
              onPointerDown={(event) => event.stopPropagation()}
              onClick={editTask}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-cyan-600 transition-all duration-200 hover:bg-cyan-50 hover:text-cyan-700 active:scale-95"
              type="button"
              aria-label="Edit task"
            >
              <Pencil size={17} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TaskCard;
