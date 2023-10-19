import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function DeleteConfirmation({onDelete, onCancel}) {
    return (
      <div className="container-md bg-secondary text-light
         delete-confirmation">
        <p>Are you sure you want to delete the task?</p>
        <div className="delete-buttons d-flex justify-content-end mx-4 my-4">
          <button onClick={onDelete} className="btn btn-danger">
            Delete
          </button>
          <button onClick={onCancel} className="btn btn-light">
            Cancel
          </button>
        </div>
      </div>
    );
  }
    
             

export default DeleteConfirmation;
