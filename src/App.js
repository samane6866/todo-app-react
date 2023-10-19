import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar.js";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Router";
// import AddTask from "./components/AddTask.js";
import EditTask from "./components/EditTask.js";
import Task from "./components/Task.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("error to get the list", error);
      });
  }, []);

  const handleEditTask = (taskId) => {
    console.log('Editing task with ID:', taskId);
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
     
      {editingTask && (
        <EditTask
        task={editingTask}
        onSave={handleSaveTask}
        onCancel={handleCancelEdit}
      />
     )} 
      {/* <AddTask />  */}
      <Router>
        <div className="container">
          <h1>My Todo List</h1>
          <button className="bg-info">+ New To dO</button>

          <ul>
            {tasks.map((task) => (
              <Task key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
            ))}
          </ul>
        </div>
        
      </Router>
    </>
  );
}

export default App;
