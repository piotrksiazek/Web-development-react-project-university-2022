import React, { useEffect, useState } from 'react';
import { cdnBaseUrl } from '../../../../constants';
import { ClipLoader } from 'react-spinners';
import { Image } from '../Image/image';
import  * as constants  from '../../../constants';
import "./project-miniature.scss";
import { NextButton } from './nextButton/next-button';

export interface ProjectMiniatureProps{
    index: number;
    primaryImage: string;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    opacityForAllImages: string;
    setOpacityForAllImages: React.Dispatch<React.SetStateAction<string>>;
}

export const ProjectMiniature = ({index, primaryImage, activeIndex, setActiveIndex, opacityForAllImages, setOpacityForAllImages} : ProjectMiniatureProps) => {
    const [style, setStyle] = useState(constants.lowSize)
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [img, setImg] = useState("");
    
    const handleClick = () => {
        if(activeIndex === index){
            setStyle(constants.lowSize);
            setActiveIndex(-1);
            setOpacityForAllImages(constants.fullOpacity);
        } else if(activeIndex < 0){
            setActiveIndex(index);
            setStyle(constants.fullSize);
            setOpacityForAllImages(constants.lowOpacity);
        }
    }

    const fetchImage = async (imageUrl: string) => {
        const res = await fetch(imageUrl);
        setIsImgLoaded(true);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage(cdnBaseUrl + primaryImage);
      }, []);

    if(isImgLoaded)
    {
        return (
            <div className={'miniature-image-container'}
                style={{width: style, height: style}}
                >
                    {activeIndex === index ? <NextButton content='previous'/> : <div/>}
                    <Image 
                        onClick={() => handleClick()}
                        opacity={activeIndex === index? constants.fullOpacity : opacityForAllImages} 
                        img={img}
                        />
                    {activeIndex === index ? <NextButton content='next'/> : <div/>}
            </div>
        );
    } else {
        return (
            <div className={'loader'}>
                <ClipLoader
                    
                />
            </div>
        )
    }
}