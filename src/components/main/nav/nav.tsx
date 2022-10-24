import React from "react";
import "./nav.scss";

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="navitem">
                <span className="navText">About</span>
            </div>
            <div className="navitem">
                <span className="navText">Contact</span>
            </div>
        </nav>
    )
}