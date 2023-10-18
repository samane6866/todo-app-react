import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar.js";
import AddTask from "./components/AddTask.js";
import EditTask from "./components/EditTask.js";
import Task from "./components/Task.js";
import DeleteConfirmation from "./components/DeleteConfirmation.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <EditTask></EditTask>
      <AddTask />
      <Task></Task>

      <DeleteConfirmation />
    </>
  );
}

export default App;
