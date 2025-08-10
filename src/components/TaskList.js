import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], onDeleteTask = () => {} }) {
  return (
    <div className="tasks">
      {tasks.map((t, idx) => (
        <Task
          key={t.text ?? idx}
          text={t.text}
          category={t.category}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
