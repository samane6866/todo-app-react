
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar.js";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Router";
import AddTask from "./components/AddTask.js";
import EditTask from "./components/EditTask.js";
import Task from "./components/Task.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("error to get the list", error);
      });
  }, []);

  const handleAddTask = (newTaskName) => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskName,
      completed: false,
    };

    setTasks([newTask, ...tasks]);

    setShowAddTask(false);
  };

  const handleEditTask = (taskId) => {
    console.log("Editing task with ID:", taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
    }
  };
  const handleSaveTask = (taskId, editedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: editedTitle } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container py-2 d-flex justify-content-end p-0"

>
  {showAddTask ? (
    <AddTask
      onAdd={handleAddTask}
      onCancel={() => setShowAddTask(false)}
    />
  ) : (
    <button onClick={() => setShowAddTask(true)} className="bg-info text-white fw-bold p-2 rounded">
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

      <Router>
        <div className="container bg-secondary py-2 d-flex justify-content-between align-items-center rounded">
        <span className="mx-3 text-white fw-bold">ID</span>
         
          <span className=" me-4 text-white fw-bold">TITLE</span> 
          <span className="me-5 fs-6 text-white fw-bold ">COMPLETED</span> 
          
           
            
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
      </Router>

    </>
  );
}

export default App;
