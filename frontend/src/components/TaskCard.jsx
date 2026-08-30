const TaskCard = ({ title, priority, assignee }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{priority}</h2>
      <h2>{assignee}</h2>
    </div>
  );
};

export default TaskCard;
