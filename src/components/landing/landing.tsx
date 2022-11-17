import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from "react-router-dom";
import "./landing.scss"
import { LandingText } from './text/text';

interface IMousePosition{
    x: number,
    y: number
}

export const Landing = () => {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState<IMousePosition>({x: 0, y: 0});
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })
    
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        const updateMousePosition = (event: MouseEvent) => {
          const position: IMousePosition = { x: event.clientX, y: event.clientY};
          setMousePosition(position);
        };

        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
            console.log(windowDimensions);
          }
        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('mousemove', updateMousePosition);
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    if(isDesktopOrLaptop){
        return (
          <div
            className="landing-image-wrapper" 
            onClick={() => navigate("portfolio")}>
              <div style={{transform: `translate(0, -20%)`}}>
                <img className="landing-image" style={{transform: `translate(${-mousePosition.x/20}px, ${-mousePosition.y/20}px) scale(1.1)` }} src={require("../../Images/welcome.jpg")}></img>
              </div>
              
              <LandingText/>
          </div>
      )
    } else {
      return <div className="landing-image-wrapper"><LandingText/></div>
    }
    
}