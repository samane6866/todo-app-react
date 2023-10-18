import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AddTask() {
  return (
    <>
      <div className="container py-5 my-5 h-100 bg-light border rounded">
        <form>
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
              placeholder="Add your task here"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default AddTask;
