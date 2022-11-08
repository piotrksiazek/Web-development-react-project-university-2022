import { motion } from "framer-motion";
import React, { useState } from "react";
import { Nav } from "./nav/nav";
import { ProjectMiniature } from "./project/project-miniature";

export const Main = () => {
    const baseColor = "#E33B78";
    const [activeMiniature, setActiveMiniature] = useState<number>(-1);
    const toggleSize = (index: number) => {

    }
    return (
    <motion.div 
        initial={{opacity: "0%"}}
        animate={{opacity: "100%"}}
        exit={{opacity: "0%"}}>
        <Nav/>
        <div style={{display: "flex", flexDirection: "column"}}>
                <ProjectMiniature index={1} primaryImage={"prince.jpg"} activeIndex={activeMiniature} setActiveIndex={setActiveMiniature}/>
                <ProjectMiniature index={2} primaryImage={"golden.jpg"} activeIndex={activeMiniature} setActiveIndex={setActiveMiniature}/>
                <ProjectMiniature index={3} primaryImage={"prince.jpg"} activeIndex={activeMiniature} setActiveIndex={setActiveMiniature}/>
                <ProjectMiniature index={4} primaryImage={"golden.jpg"} activeIndex={activeMiniature} setActiveIndex={setActiveMiniature}/>
                <ProjectMiniature index={5} primaryImage={"prince.jpg"} activeIndex={activeMiniature} setActiveIndex={setActiveMiniature}/>
        </div>
    </motion.div>)
}