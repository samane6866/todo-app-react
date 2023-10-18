import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditTask() {
    return (
        <div className="container py-5 my-5 h-100 bg-light border rounded">
        <form>
          <div className="text-center mb-3 d-flex flex-row justify-content-center">
            <h2>EditTask</h2>
            
          </div>
          <div className="form-group d-flex align-items-center">
            <label htmlFor="task">
              Titel
            </label>
            <input
              type="text"
              className="form-control form-control-lg mx-4"
              id="task"
              placeholder="Edit your task"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>


    )

}
export default EditTask;