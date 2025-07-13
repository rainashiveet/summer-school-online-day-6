import React, { useState } from 'react';
import TodoInput from './ToDoInput';
import TodoItem from './ToDoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast", 
    "Take a shower", 
    "Walk the dog"
  ]);
  const [completed, setCompleted] = useState(new Set());
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
    setCompleted(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTasks(newTasks);
  }

  function toggleComplete(index) {
    setCompleted(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <TodoInput
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
      <ol>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            isCompleted={completed.has(index)}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
