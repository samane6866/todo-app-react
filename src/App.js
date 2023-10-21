import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar.js";
import AddTask from "./components/AddTask.js";
import EditTask from "./components/EditTask.js";
import Task from "./components/Task.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to manage the task being edited
  const [editingTask, setEditingTask] = useState(null);

  //control the visibility of the "Add New Task" form
  const [showAddTask, setShowAddTask] = useState(false);
  // Fetch the list of tasks from an API
  useEffect(() => {
    // Use Axios, a promise-based HTTP client, to send a GET request to the API.
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("error to get the list", error);
      });
  }, []);
  // Function to add a new task
  const handleAddTask = (newTaskName) => {
    const newTask = {
      id: tasks.length + 1, // Generate a unique ID
      title: newTaskName,
      completed: false, // Initially set as not completed
    };
    // Update the list of tasks with the new task
    setTasks([newTask, ...tasks]);
    // Hide the "Add New Task" form
    setShowAddTask(false);
  };
  // Find the task to edit based on its ID
  const handleEditTask = (taskId) => {
    console.log("Editing task with ID:", taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
    }
  };
  const handleSaveTask = (taskId, editedTitle) => {
    // Update the task with the new title
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editedTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };
  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    // Remove the task from the list
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the list of tasks
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container py-2 d-flex justify-content-end p-0">
        {showAddTask ? (
          <AddTask
            onAdd={handleAddTask}
            onCancel={() => setShowAddTask(false)}
          />
        ) : (
          <button
            onClick={() => setShowAddTask(true)}
            className="bg-info text-white fw-bold p-2 rounded"
          >
            + New To Do
          </button>
        )}
      </div>
      {editingTask && (
        <EditTask
          task={editingTask}
          onSave={handleSaveTask}
          onCancel={handleCancelEdit}
        />
      )}

      <div className="container bg-secondary py-2 d-flex justify-content-between align-items-center rounded-top">
        <span className="mx-3  text-sm text-white fw-bold ">ID</span>

        <span className=" me-4 text-white fw-bold text-sm">TITLE</span>
        <span className="me-5 text-sm text-white fw-bold ">COMPLETED</span>
      </div>
      <div className="container bg-light">
        {tasks.map((task, index) => (
          <Task 
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            taskId={index + 1}
          />
        ))}
      </div>
    </>
  );
}

export default App;
