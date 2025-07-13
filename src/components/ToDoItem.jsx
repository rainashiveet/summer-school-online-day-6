import React from 'react';

function TodoItem({
  task,
  index,
  isCompleted,
  toggleComplete,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <li className={isCompleted ? "completed" : ""}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleComplete(index)}
        className="check-task"
      />
      <span className={`text ${isCompleted ? "done" : ""}`}>
        {task}
      </span>
      <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
      <button className="move-button" onClick={() => moveTaskUp(index)}>Up☝️</button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>Down👇</button>
    </li>
  );
}

export default TodoItem;
