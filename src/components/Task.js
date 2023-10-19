import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task(props) {
  const {id, title, completed } = props.task;
  return (
    <div className="bg-light p-3 mb-3 d-flex justify-content-between align-items-center">
      <span>{title }</span>
      <div>
        <button className="btn btn-success  mx-1">
          
          <FontAwesomeIcon icon="fa-solid fa-square-check" size="lg" />
          {completed ? "Completed" : "Pending"}
        </button>
        <button className="btn btn-warning  mx-1">
          <FontAwesomeIcon icon="fa-solid fa-pen" size="lg" />
        </button>
        <button className="btn btn-danger mx-1">
          <FontAwesomeIcon icon="fa-solid fa-trash-can" size="lg" />
        </button>
      </div>
    </div>
  );
}
export default Task;
