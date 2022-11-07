import { motion } from "framer-motion";
import React, { useState } from "react";
import { Nav } from "./nav/nav";
import { ProjectMiniature } from "./project/project-miniature";

export const Main = () => {
    const baseColor = "#E33B78";
    const [color, setColor] = useState(baseColor);
    return (
    <motion.div 
        initial={{opacity: "0%"}}
        animate={{opacity: "100%"}}
        exit={{opacity: "0%"}}>
        <Nav color={color}/>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div onMouseOver={() => setColor("blue")} onMouseLeave={() => setColor("red")} style={{backgroundColor: "white", height: "90vh"}}>
                <ProjectMiniature primaryImage={"prince.jpg"} hoverImage={"golden.jpg"} title={"golden"}/>
            </div>
            <div style={{backgroundColor: "green", height: "90vh"}}>
                <ProjectMiniature primaryImage={"prince.jpg"} hoverImage={"golden.jpg"} title={"golden"}/>
            </div>
            <div  style={{backgroundColor: "blue", height: "90vh"}}>

            </div>
        </div>
    </motion.div>)
}