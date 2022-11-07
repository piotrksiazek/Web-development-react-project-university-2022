import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { cdnBaseUrl } from '../../../constants';
import "./project-miniature.scss";

interface PrimaryProps {
    img: string;
}

const Primary = ({img} : PrimaryProps) => {
    return <img className='img-primary' src={cdnBaseUrl + img}/>
}

interface SecondaryProps {
    img: string;
    title: string;
}

const Secondary = ({img, title} : SecondaryProps) => {
    return (
        <div className='secondary-wrapper'>
            <img className='img-secondary' src={cdnBaseUrl + img}/>
            <div className='text'>{title}</div>
            <div className='bg'></div>
        </div>
    )
}


export interface ProjectMiniatureProps{
    primaryImage: string;
    hoverImage: string;
    title: string;
}

export const ProjectMiniature = ({primaryImage, hoverImage, title} : ProjectMiniatureProps) => {
    const [isHover, setIsHover] = useState(false);
    const [isTouch, setIsTouch] = useState(false)

    return (
        <div  className='miniature-image-container'
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
                {(!isHover) ? 
                        <Primary img={primaryImage}/>
                            : 
                        <Secondary img={hoverImage} title={title}/>
                    }
        </div>
    );
}