import { useState, useEffect } from "react";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
import { Plus } from "lucide-react";
// we need a boolean if we need to change css onchange/onclick or on some event

const Board = ({ search, setSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  // const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState(() => {
    // getting the tasks
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : []; // setting the tasks to stored tasks or empty arr
  });
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status == "Completed",
  ).length;

  // placing the items in local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const searchTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="px-5 py-6 sm:px-8">
      <div className="mb-7 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            Project board
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-950">
            Today&apos;s workflow
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Plan, edit, and move work across a focused kanban view.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Done
            </p>
            <p className="font-display text-2xl font-bold text-slate-950">
              {completedTasks}/{totalTasks}
            </p>
          </div>
          <button
            onClick={() => {
              setIsEditing(null);
              setIsModalOpen(true);
            }}
            className="flex cursor-pointer items-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-500 hover:shadow-xl active:translate-y-0"
            type="button"
          >
            <Plus size={19} /> Add Task
          </button>
        </div>
      </div>

      <Column
        // for tasks
        tasks={searchTasks}
        setTasks={setTasks}
        setIsModalOpen={setIsModalOpen}
        setIsEditing={setIsEditing}
      />
      {isModalOpen && (
        // for editing and for tasks
        <AddTaskModal
          tasks={tasks}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </section>
  );
};

export default Board;
