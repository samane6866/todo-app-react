import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function DeleteConfirmation({onDelete, onCancel}) {
  return (
       // A container for the delete confirmation 
      <div className="container-sm bg-secondary text-light
        p-3 rounded">
        <p className="text-center mb-4">
         <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" size="xl"className="text-warning mx-1 fw-bold"/> Are you sure you want to delete the task?</p>
        <div className="d-flex flex-row align-items-center justify-content-center mx-4 my-4">
          <button onClick={onDelete} className="btn btn-danger mx-5 btn-sm fw-bold">
            Delete
          </button>
          <button onClick={onCancel} className="btn btn-light mx-5 btn-sm fw-bold text-secondary">
            Cancel
          </button>
        </div>
      </div>
    );
  }
    
             

export default DeleteConfirmation;
