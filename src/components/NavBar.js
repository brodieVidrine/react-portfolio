import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

function NavBar(){
    return(
        <div className='navbar'>
            <div>
                <h1>Brodie Vidrine</h1>
            </div>
            <ul className='navbar-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/*<li><Link to="/notes">Notes App</Link></li>*/}
            </ul>
        </div>

    )
}

export default NavBar