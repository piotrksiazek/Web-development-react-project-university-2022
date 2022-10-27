import React, { useState } from "react";
import "./nav.scss";

export interface NavProps {
    color: string;
}

export const Nav = ({color} : NavProps) => {
    return (
        <nav className="nav" style={{backgroundColor: color} }>
            <div className="navitem">
                <span className="navText">About</span>
            </div>
            <div className="navitem">
                <span className="navText">Contact</span>
            </div>
        </nav>
    )
}