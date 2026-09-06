import { Pencil, Shredder } from "lucide-react";

const TaskCard = ({
  id,
  title,
  priority,
  assignee,
  description,
  tasks,
  setTasks,
  isModalOpen,
  setIsModalOpen,
  isEditing,
  setIsEditing,
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
  };

  const editTask = () => {
    setIsEditing({
      id,
      title,
      description,
      priority,
      assignee,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="mb-4 rounded-lg bg-white p-4 text-slate-800 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold leading-snug capitalize">
          {title}
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityClasses[priority] || "bg-slate-100 text-slate-700"
          }`}
        >
          {priority}
        </span>
      </div>

      <div>
        <p className="mb-3 text-sm text-slate-600 capitalize">{description}</p>

        <h2 className="text-sm font-medium text-slate-500">
          Assignee:{" "}
          <span className="text-slate-700 capitalize">{assignee}</span>
        </h2>
      </div>
      <div className="flex flex-row items-center gap-6 width-full">
        <div className="flex flex-row gap-3 mt-4 items-center">
          <Shredder color="#d21e1e" strokeWidth={1.5} />
          <button
            onClick={() => {
              deleteTask();
            }}
            className="bg-blue-600 text-white rounded-xl px-4 py-2 active:scale-95"
          >
            Delete
          </button>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <Pencil color="#10407f" strokeWidth={1.5} />
          <button
            onClick={editTask}
            className="bg-blue-600 text-white rounded-xl px-4 py-2 active:scale-95"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
