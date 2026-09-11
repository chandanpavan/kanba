import { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const AddTaskModal = (props) => {
  const [title, setTitle] = useState(props.isEditing?.title || "");
  const [description, setDescription] = useState(
    props.isEditing?.description || "",
  );
  const [assignee, setAssignee] = useState(props.isEditing?.assignee || "");
  const [priority, setPriority] = useState(props.isEditing?.priority || "High");
  const [status, setStatus] = useState(props.isEditing?.status || "Todo");

  const submitHandler = (e) => {
    e.preventDefault();
    taskHandler();
    props.setIsModalOpen(false);
  };

  const taskHandler = () => {
    if (props.isEditing) {
      const updatedTasks = props.tasks.map((task) => {
        if (task.id == props.isEditing.id) {
          // return updated task
          return {
            id: task.id,
            title,
            description,
            assignee,
            priority,
            status,
          };
        }
        return task;
      });
      props.setTasks(updatedTasks);
      props.setIsEditing(null);
      toast.success("Task updated succesfully!");
    }
    // adding new tasks
    else {
      const newTask = {
        id: Date.now(),
        title,
        description,
        assignee,
        priority,
        status,
      };

      props.setTasks([...props.tasks, newTask]);
      toast.success("Task added!");
    }
  };

  return (
    <div className="modal-backdrop fixed inset-0 flex items-center justify-center bg-slate-950/45">
      <div className="modal-panel w-[min(94vw,520px)] rounded-3xl border border-white/70 bg-white p-6 text-slate-900 shadow-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-600">
                {props.isEditing ? "Edit task" : "New task"}
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-950">
                {props.isEditing ? "Update task" : "Create task"}
              </h1>
            </div>
            <button
              onClick={() => {
                props.setIsEditing(null);
                props.setIsModalOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
              type="button"
              aria-label="Close modal"
            >
              <X size={19} />
            </button>
          </div>
          <div>
            <label>Title</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              type="text"
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label>Priority</label>
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
              <label>Status</label>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <option value="Todo">Todo</option>
                <option value="In-Progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
          <div>
            <label>Assignee</label>
            <input
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
              value={assignee}
              type="text"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                props.setIsEditing(null);
                props.setIsModalOpen(false);
              }}
              type="button"
            >
              Cancel
            </button>
            <button type="submit">
              {props.isEditing ? "Save changes" : "Create task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
