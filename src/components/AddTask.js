import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function AddTask({ onAdd, onCancel }) {
  // State to store the title of the new task
  const [newTaskTitle, setNewTaskTitle] = useState("");
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTaskTitle);
    // Reset the title to an empty value after adding the task
    setNewTaskTitle("");
  };

  return (
    <>
      <div className="container bg-light p-3 rounded">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-3 d-flex flex-row justify-content-center align-items-center">
            <h2 className="">Add Task</h2>
            <div className="text-info">
              <FontAwesomeIcon
                className="mx-1"
                icon="fa-solid fa-circle-check"
                size="2x"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="fw-bold" htmlFor="task">
              Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="task"
              placeholder="Add your new task here"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center my-4">
            <button
              type="submit"
              className="btn btn-info text-white fw-bold mx-2"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary fw-bold "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddTask;
