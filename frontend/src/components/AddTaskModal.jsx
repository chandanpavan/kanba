import { useState } from "react";

const AddTaskModal = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("Todo");

  const submitHandler = (e) => {
    e.preventDefault();
    taskHandler();
    props.setIsModalOpen(false);
  };

  const taskHandler = () => {
    // adding new tasks
    const newTask = {
      id: Date.now(),
      title,
      description,
      assignee,
      priority,
      status,
    };

    props.setTasks([...props.tasks, newTask]);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white text-black p-4 rounded-xl text-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
        >
          <h1>Create Task</h1>
          <div>
            <h2>Title</h2>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              type="text"
            />
          </div>
          <div>
            <h2>Description</h2>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              type="text"
            />
          </div>
          <div>
            <h2>Priority</h2>
            <select
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              value={priority}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <h2>Assignee</h2>
            <input
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
              value={assignee}
              type="text"
            />
          </div>
          <div>
            <h2>Status</h2>
            <select
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              value={status}
            >
              <option value="Todo">Todo</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => {
                props.setIsModalOpen(false);
              }}
              type="button"
            >
              Cancel
            </button>
            <button type="submit">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
