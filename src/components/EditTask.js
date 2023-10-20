import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


function EditTask({ task, onSave, onCancel }) {
  // State to manage the edited task title
  const [editedTask, setEditedTask] = useState(task ? task.title : '');

  
  // If there's no task provided, return nothing
  if (!task) {
    return null;
  }
  
 
    return (
        <div className="container p-3  bg-light rounded">
        <form>
          <div className="text-center mb-3 d-flex justify-content-center">
            <h2 className="fs-4">EditTask</h2>
            
          </div>
          <label htmlFor="task" className='fw-bold mx-4'>
              Titel
            </label>
          <div className="form-group d-flex align-items-center">
            
            <input
              type="text"
              className="form-control form-control-lg mx-4"
              id="task"
              placeholder="Edit your task"
              value={editedTask}
              onChange={(e)=>setEditedTask(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-center my-4'>
          <button type="submit"  onClick={() => onSave(task.id, editedTask)} className="btn btn-info mx-2 text-white fw-bold">
         Save
            </button>
            <button type="submit"  onClick={onCancel} className="btn btn-secondary mx-2 text-white fw-bold">
            {onCancel}Cancel
            </button>
          </div>
        </form>
      </div>
      

    )

}
export default EditTask;