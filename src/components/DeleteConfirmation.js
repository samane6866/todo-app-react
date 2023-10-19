import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";


function DeleteConfirmation({onDelete, onCancel}) {
    return (
        <div className="container-md bg-light delete-confirmation">
        <p>Are you sure to delete your task?</p>
        <div className="delete-buttons d-flex justify-content-end mx-4 my-4">
          <button onClick={onDelete} className="btn btn-danger">
            Delete
          </button>
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    );
  }
    
             

export default DeleteConfirmation;
