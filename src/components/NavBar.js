import React from "react";
import { Link } from "react-router-dom"; 

function NavBar(){
    return(
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">Brodie Vidrine</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">Resume</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">Portfolio</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link">React Experiments</Link></li>
      </ul>
    </header>
    )
}

export default NavBar