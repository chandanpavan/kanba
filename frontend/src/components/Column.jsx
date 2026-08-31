import TaskCard from "./TaskCard";

const Column = ({ tasks }) => {
  const tabs = ["Todo", "In-Progress", "Completed"];

  return (
    <div className="flex flex-row justify-around  items-start gap-6 mt-4">
      {tabs.map(function (elem) {
        // rendering each tab
        return (
          <div key={elem}>
            <div className="flex justify-center items-center">
              <button className="outline-none px-4 py-2 cursor-pointer text-2xl bg-blue-600 rounded-2xl">
                {elem}
              </button>
            </div>
            <div className="bg-yellow-600 w-80 h-125 rounded-xl mt-4 p-4">
              {tasks
                .filter((task) => task.status == elem) // better than using if (task.status == elem)
                .map(function (task) {
                  return (
                    // rendering each task to its seperate column
                    <TaskCard
                      key={task.id}
                      title={task.title}
                      priority={task.priority}
                      assignee={task.assignee}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Column;
