import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false, id: Date.now() }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !task.completed
      : task.completed
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button variant="primary" onClick={addTask} className="rounded-l-none">
          Add
        </Button>
      </div>
      <div className="mb-4 space-x-2">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span
              className={task.completed ? "line-through text-gray-400" : ""}
              onClick={() => toggleTask(task.id)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>
            <Button
              variant="danger"
              onClick={() => deleteTask(task.id)}
              className="px-2 py-1"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
