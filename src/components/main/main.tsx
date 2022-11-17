import { motion } from "framer-motion";
import { useState } from "react";
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
                        primaryImage={"wiatraki/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["wiatraki/2.jpg", "wiatraki/3.jpg"]}
                        zIndex={imgZIndex}
                        title={"w i a t r a k"}
                        isVertical={true}
                        />
                    <ProjectMiniature 
                        index={4} 
                        primaryImage={"pole/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["pole/3.jpg", "pole/4.jpg", "pole/5.jpg", "pole/6.jpg"]}
                        zIndex={imgZIndex}
                        title={"p o l e"}
                        isVertical={false}
                        />
                                        <ProjectMiniature 
                        index={5} 
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
                        index={6} 
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
                        index={7} 
                        primaryImage={"wiatraki/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["wiatraki/2.jpg", "wiatraki/3.jpg"]}
                        zIndex={imgZIndex}
                        title={"w i a t r a k"}
                        isVertical={true}
                        />
                    <ProjectMiniature 
                        index={8} 
                        primaryImage={"pole/1.jpg"} 
                        activeIndex={activeMiniature} 
                        setActiveIndex={setActiveMiniature} 
                        opacityForAllImages={opacityForAllImages} 
                        setOpacityForAllImages={setOpacityForAllImages}
                        otherImages={["pole/3.jpg", "pole/4.jpg", "pole/5.jpg", "pole/6.jpg"]}
                        zIndex={imgZIndex}
                        title={"p o l e"}
                        isVertical={false}
                        />
            </div>
    </motion.div>)
}