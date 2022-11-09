import { motion } from "framer-motion";
import { useState } from "react";
import { Nav } from "./nav/nav";
import { ProjectMiniature } from "./project/projectMiniature/project-miniature";
import "./main.scss";

export const Main = () => {
    const [activeMiniature, setActiveMiniature] = useState<number>(-1);
    const [opacityForAllImages, setOpacityForAllImages] = useState("100%");
    const [imgZIndex, setImgZIndex] = useState("0");

    const toggleImgZIndex = () => {
        if(imgZIndex === "-1"){
            setImgZIndex("0");
        } else {
            setImgZIndex("-1");
        }
    }

    return (
    <motion.div 
        initial={{opacity: "0%"}}
        animate={{opacity: "100%"}}
        exit={{opacity: "0%"}}>
        <Nav toggleZIndex={toggleImgZIndex}/>

            <div style={{display: "flex", flexDirection: "column"}}>
                    <ProjectMiniature 
                        index={1} 
                        primaryImage={"prince.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg"]}
                        zIndex={imgZIndex}
                        title={"project 1"}
                        />
                    <ProjectMiniature 
                        index={2} 
                        primaryImage={"prince.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg", "golden.jpg", "prince.jpg"]}
                        zIndex={imgZIndex}
                        title={"project 2"}
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
                        />
            </div>
    </motion.div>)
}