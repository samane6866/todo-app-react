import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

function Task(props) {
  // Extracting task details and functions from props
  const { id, title, completed } = props.task;
  const { onEdit, onDelete, taskId } = props;
  // State to manage task completion
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  // Function to show the delete confirmation
  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };
  // Function to delete a task
  const handleDelete = () => {
    onDelete(id);
    setShowConfirmation(false);
  };
  
  // Function to cancel the delete task
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };
  // Function to handle checkbox state changes
  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="bg-light p-3 mb-3 d-flex justify-content-between align-items-center">
      {" "}
      {taskId}
      {showConfirmation ? (
        <DeleteConfirmation
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
        />
      ) : (
        <>
          <div className="d-flex flex-column">
            <span
              className={
                isCompleted
                  ? "text-decoration-line-through fs-6 text-center text-success"
                  : "text-center"
              }
            >
              {title}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <input
              className={`form-check-input mt-0 me-4 ${
                isCompleted ? "bg-success" : ""
              }`}
              type="checkbox"
              onChange={handleCheckboxChange}
              value=""
              checked={isCompleted}
              aria-label="Checkbox for following text input"
              style={{ width: "20px", height: "20px" }}
            />
            <div className="d-flex justify-content-evenly ">
              <span onClick={() => onEdit(id)}>
                <FontAwesomeIcon
                  icon="fa-solid fa-pen-to-square"
                  size="lg"
                  className="text-warning"
                />
              </span>
              <span onClick={handleDeleteConfirmation} className="me-2 mx-1">
                <FontAwesomeIcon
                  icon="fa-solid fa-trash-can"
                  className="text-secondary"
                  size="lg"
                />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Task;
