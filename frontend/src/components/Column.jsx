import ColumnBox from "./ColumnBox";
// import { useDroppable } from "@dnd-kit/core";

const Column = ({ tasks, setTasks, setIsModalOpen, setIsEditing }) => {
  const tabs = [
    { label: "Todo", accent: "bg-sky-500", surface: "from-sky-50 to-white" },
    {
      label: "In-Progress",
      accent: "bg-amber-500",
      surface: "from-amber-50 to-white",
    },
    {
      label: "Completed",
      accent: "bg-emerald-500",
      surface: "from-emerald-50 to-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
      {tabs.map(function (tab) {
        // rendering each tab
        return (
          <ColumnBox
            tasks={tasks}
            setTasks={setTasks}
            setIsModalOpen={setIsModalOpen}
            setIsEditing={setIsEditing}
            tab={tab}
            key={tab.label}
          />
        );
      })}
    </div>
  );
};

export default Column;
