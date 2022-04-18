import React from "react";
import {Link,NavLink} from "react-router-dom";
import "./Header.css";

const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Accounts App</Link>
       
       <ul className="navbar-nav ms-auto">
           <NavLink end to="/" className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Accounts</NavLink>
           <NavLink to="/add"  className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Add</NavLink>
           <NavLink to="/edit" end className={({ isActive }) => "nav-link" + (isActive ? " activeLink" : "")}>Edit/Delete</NavLink>
       </ul>
    </nav>
    )
}

export default Header;