import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "./nav/nav";
import { ProjectMiniature } from "./project/projectMiniature/project-miniature";
import "./main.scss";

export interface MainProps {
    imgZIndex: string;
}

export const Main = ({imgZIndex} : MainProps) => {
    const [activeMiniature, setActiveMiniature] = useState<number>(-1);
    const [opacityForAllImages, setOpacityForAllImages] = useState("100%");

    return (
    <motion.div 
        initial={{opacity: "0%"}}
        animate={{opacity: "100%"}}
        exit={{opacity: "0%"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                    <ProjectMiniature 
                        index={1} 
                        primaryImage={"fuzz/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["fuzz/2.jpg", "fuzz/3.jpg", "fuzz/4.jpg", "fuzz/5.jpg", "fuzz/6.jpg"]}
                        zIndex={imgZIndex}
                        title={"F U Z Z"}
                        isVertical={false}
                        />
                    <ProjectMiniature 
                        index={2} 
                        primaryImage={"bnw/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["bnw/2.jpg", "bnw/3.jpg", "bnw/4.jpg"]}
                        zIndex={imgZIndex}
                        title={"B N W"}
                        isVertical={true}
                        />
                    <ProjectMiniature 
                        index={3} 
                        primaryImage={"prince.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg"]}
                        zIndex={imgZIndex}
                        title={"project 3"}
                        isVertical={false}
                        />
            </div>
    </motion.div>)
}