import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === selectedCategory);

  function handleDeleteTask(text) {
    setTasks((prev) => prev.filter((t) => t.text !== text));
  }

  function handleAddTask(task) {
    setTasks((prev) => [...prev, task]);
  }

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
