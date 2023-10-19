import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { useNavigate } from 'react-router-dom';




function Task(props) {
  const navigate = useNavigate();
  const { id, title, completed } = props.task;
  const { onEdit, onDelete } = props;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
    navigate(`/delete/${id}`);
  };

  const handleDelete = () => {
    onDelete(id);
    setShowConfirmation(false); // Oculta la confirmación después de borrar
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="bg-light p-3 mb-3 d-flex justify-content-between align-items-center" >
     
      <span className={isCompleted ? "text-decoration-line-through bg-success" : ""}>{title}</span>
      <div>
        
          <input class="form-check-input mt-0" type="checkbox" onChange={handleCheckboxChange} value="" aria-label="Checkbox for following text input"/>
  
        
        <button onClick={() => onEdit(id)} className="btn btn-warning  mx-1">
          <FontAwesomeIcon icon="fa-solid fa-pen" size="lg" />
        </button>
        <button
          onClick={handleDeleteConfirmation}
          className="btn btn-danger mx-1"
        >
          <FontAwesomeIcon icon="fa-solid fa-trash-can" size="lg" />
        </button>
      </div>
      {showConfirmation && (
        <DeleteConfirmation onDelete={handleDelete} onCancel={handleCancelDelete} />
      )}
    </div>
  );
}

export default Task;

