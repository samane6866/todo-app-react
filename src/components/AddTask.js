import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function AddTask({ onAdd, onCancel }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <>
      <div className="container py-5 my-5 h-100 bg-light border rounded">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-3 d-flex flex-row justify-content-center">
            <h2>Add Task</h2>
            <div className="text-info">
              <FontAwesomeIcon
                className="mx-2"
                icon="fa-solid fa-circle-check"
                size="2xl"
              />
            </div>
          </div>
          <div className="form-group d-flex align-items-center">
            <label htmlFor="task">Titel</label>
            <input
              type="text"
              className="form-control form-control-lg mx-4"
              id="task"
              placeholder="Add your new task here"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end mx-4 my-4 justify-content-sm-center">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary"
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
