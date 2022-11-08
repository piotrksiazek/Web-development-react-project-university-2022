import React, { useState } from 'react';
import { cdnBaseUrl } from '../../../constants';
import "./project-miniature.scss";

interface PrimaryProps {
    img: string;
}

const Primary = ({img} : PrimaryProps) => {
    return <img className='img-primary' src={cdnBaseUrl + img}/>
}


export interface ProjectMiniatureProps{
    index: number;
    primaryImage: string;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectMiniature = ({index, primaryImage, activeIndex, setActiveIndex} : ProjectMiniatureProps) => {
    const [style, setStyle] = useState("50%")
    
    const handleClick = () => {
        if(activeIndex === index){
            setStyle("50%");
            setActiveIndex(-1);
        } else if(activeIndex < 0){
            setActiveIndex(index);
            setStyle("90%");
        }
    }

    return (
        <div className={'miniature-image-container'}
            style={{width: style, height: style}}
            onClick={() => {handleClick()}}>
                <Primary img={primaryImage}/>
        </div>
    );
    
}