import { useState } from "react";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
import { Plus } from "lucide-react";
// we need a boolean if we need to change css onchange/onclick or on some event

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [isRed, setIsRed] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <div className="flex justify-end mb-6 mr-16 mt-4">
        <button
          onClick={() => {
            setIsModalOpen(true);
            setIsRed(!isRed);
          }}
          // just trying how can we change ui
          className={`cursor-pointer items-center gap-1 active:scale-95 text-2xl ${isRed ? "bg-red-600" : "bg-green-600"} rounded-xl px-4 py-4 font-bold flex`}
        >
          <Plus /> Add Task
        </button>
      </div>
      <Column
        tasks={tasks}
        setTasks={setTasks}
        isModalOpen={setIsModalOpen}
        setIsModalOpen={setIsModalOpen}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      {isModalOpen && (
        <AddTaskModal
          tasks={tasks}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Board;
