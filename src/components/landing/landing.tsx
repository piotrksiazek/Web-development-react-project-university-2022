import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import internal from 'stream';
import "./landing.scss"

interface IMousePosition{
    x: number,
    y: number
}

export const Landing = () => {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState<IMousePosition>({x: 0, y: 0});
    const [active, setActive] = useState(false);

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
          const position: IMousePosition = { x: event.clientX, y: event.clientY + 5000 };
          setMousePosition(position);
          
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
          window.removeEventListener('mousemove', updateMousePosition);
        };
      }, []);

    return (
        <div className="landing-image-wrapper" onClick={() => navigate("portfolio")}>
            <img className="landing-image" style={{transform: `translate(${-mousePosition.x/20}px, ${-mousePosition.y/20}px) scale(1.1)` }} src={require("../../Images/welcome.png")}></img>
        </div>
    )
}