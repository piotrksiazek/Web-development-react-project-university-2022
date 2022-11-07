import React, { useState } from 'react';
import { cdnBaseUrl } from '../../../constants';
import "./project-miniature.scss";

export interface ProjectMiniatureProps{
    primaryImage: string;
    hoverImage: string;
    title: string;
}

export const ProjectMiniature = ({primaryImage, hoverImage, title} : ProjectMiniatureProps) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div 
        onMouseOver={() => {setIsHover(true)}}
        onMouseLeave={() => {setIsHover(false)}}>
                <div className='miniature-image-container'>
                    {!isHover ? 
                            <img className='img-primary' src={cdnBaseUrl + primaryImage}/>
                             : 
                             <div className='secondary-wrapper'>
                                <img className='img-secondary' src={cdnBaseUrl + hoverImage}/>
                                <div className='text'>{title}</div>
                                <div className='bg'></div>
                             </div>
                            }
                    
                </div>
        </div>
    );
}