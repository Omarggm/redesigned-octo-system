import React from "react";
import "../assets/styles/navbar.css";
function Navbar({ currentPage, handlePageChange }){
    return (
        <ul className="nav navbar">
            <li className="navbarItem">
                <a href="#aboutMe" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}> About Me </a>
            </li>
            <li className="navbarItem">
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}> Contact </a>
            </li>
            <li className="navbarItem">
                <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}> Portfolio </a>
            </li>
            <li className="navbarItem">
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}> Resume </a>
            </li>
        </ul>
    );
}

export default Navbar;