import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { BrowserRouter as Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Task(props) {
  const navigate = useNavigate();
  const { id, title, completed} = props.task;
  const { onEdit, onDelete ,taskId } = props;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
    navigate(`/delete/${id}`);
  };

  const handleDelete = () => {
    onDelete(id);
    setShowConfirmation(false); 
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  
  return (
    <div className="bg-light p-3 mb-3 d-flex justify-content-between align-items-center"> {taskId}
      {showConfirmation ? (
        <DeleteConfirmation onDelete={handleDelete} onCancel={handleCancelDelete} />
      ) : (
          <>
            <div className="d-flex flex-column">
            
          <span
            className={isCompleted ? "text-decoration-line-through fs-6 text-center text-success" : "text-center"}
          >
           {title}
              </span>
            </div>
          <div className="d-flex align-items-center">
            <input
              className="form-check-input mt-0 me-4"
              type="checkbox"
              onChange={handleCheckboxChange}
                value=""
                checked={isCompleted}
              aria-label="Checkbox for following text input"
              style={{ width: "25px", height: "25px" }}
              />
              <div className="d-flex justify-content-evenly ms-2">
            <span onClick={() => onEdit(id)}  >
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" size="xl"  />
            </span>
            <span
                onClick={handleDeleteConfirmation}
                
              className="me-2 mx-1"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash-can"  size="xl"  />
                </span>
              </div>
          </div>
        </>
      )}
    </div>
    
    
  );}
  

export default Task;
