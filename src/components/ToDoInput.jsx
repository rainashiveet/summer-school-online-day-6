import React from 'react';

function TodoInput({ newTask, setNewTask, addTask }) {
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;
