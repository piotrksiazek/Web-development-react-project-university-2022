import React from "react";
import "./about.scss";

export const About = () => {
    return (
        <div className='about-wrapper'>
            <img src={require("../../Images/welcome.jpg")}></img>
            <div className='about-text'>
                <h2>Piotr Ksiazek</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore ab qui ipsa nam culpa minima delectus esse dolorum excepturi corporis voluptates omnis commodi possimus, quo impedit et? Quasi, dignissimos!
                </div>
            </div>
        </div>
    )
}