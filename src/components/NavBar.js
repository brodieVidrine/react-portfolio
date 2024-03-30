import React from "react";
import { Link } from "react-router-dom"; 
import LotusSVG from "../static/gr/lotus.svg";

function NavBar(){
    return(
      <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 ms-2 mb-md-0 me-md-auto text-dark text-decoration-none">
          <img src={LotusSVG} width="40" height="40" ></img>
          <span className="ms-2 fs-4">Brodie Vidrine</span>
        </Link>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/resume" className="nav-link">Résumé</Link></li>
        <li className="nav-item"><Link to="/webPortfolio" className="nav-link">Web Portfolio</Link></li>
        <li className="nav-item"><Link to="/brokemonArena" className="nav-link">Brokémon Arena</Link></li>
      </ul>
    </header>
    )
}

export default NavBar