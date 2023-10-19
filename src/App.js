import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar.js";
// import AddTask from "./components/AddTask.js";
// import EditTask from "./components/EditTask.js";
import Task from "./components/Task.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTasks(console.log(response.data));
    }).catch((error => {
      console.error("error to get the list", error)
    }))
  }, []);
  return (
    <>
      <Navbar></Navbar>
      {/* <EditTask></EditTask>
      <AddTask /> */}
      <Task></Task>

      <DeleteConfirmation />
    </>
  );
}

export default App;
