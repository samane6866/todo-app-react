import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
    return ( 
    <nav className="navbar navbar-light flex-row  bg-info pt-4 pb-4">
    <div className="justify-content-sm-evenly">
    <FontAwesomeIcon className="mx-4 text-light" icon="fa-solid fa-pen-to-square" size="xl" />
   <span className='fw-bold text-light'>TO DO LIST</span>
  </div>

</nav>
)
}
export default Navbar;