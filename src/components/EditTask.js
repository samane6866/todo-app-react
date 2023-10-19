import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


function EditTask({ task, onSave, onCancel }) {
  const [editedTask, setEditedTask] = useState(task ? task.title : '');

  if (!task) {
    return null;
  }
  
 
    return (
        <div className="container py-5 my-5 h-100 bg-light border rounded">
        <form>
          <div className="text-center mb-3 d-flex flex-row justify-content-center">
            <h2 className="">EditTask</h2>
            
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
              value={editedTask}
              onChange={(e)=>setEditedTask(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-end mx-4 my-4 justify-content-sm-center'>
          <button type="submit"  onClick={() => onSave(task.id, editedTask)} className="btn btn-primary mx-3 px-4">
         Save
            </button>
            <button type="submit"  onClick={onCancel} className="btn btn-primary">
            {onCancel}Cancel
            </button>
          </div>
        </form>
      </div>


    )

}
export default EditTask;