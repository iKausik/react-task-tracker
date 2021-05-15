import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const API_HOST = process.env.REACT_APP_API_HOST;
const id1 = 5;
console.log(`${API_HOST}/${id1}`);

function Home() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${API_HOST}`);
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${API_HOST}/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`${API_HOST}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const newTask = await res.json();

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    // delete from the server
    await fetch(`${API_HOST}/${id}`, {
      method: "DELETE",
    });
    // delete from the ui
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${API_HOST}/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    console.log(data);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div>
      {location.pathname === "/" && (
        <>
          <Header
            title="Task Tracker"
            showForm={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            "No task to show"
          )}
        </>
      )}
    </div>
  );
}

export default Home;
