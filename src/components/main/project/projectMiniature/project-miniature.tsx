import React, { useEffect, useState } from 'react';
import { cdnBaseUrl } from '../../../../constants';
import { ClipLoader } from 'react-spinners';
import { Image } from '../Image/image';
import  * as constants  from '../../../../constants';
import "./project-miniature.scss";
import { NextButton } from './nextButton/next-button';
import { useMediaQuery } from 'react-responsive';

export interface ProjectMiniatureProps{
    index: number;
    primaryImage: string;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    opacityForAllImages: string;
    setOpacityForAllImages: React.Dispatch<React.SetStateAction<string>>;
    otherImages: Array<string>;
    zIndex: string;
    title: string;
    isVertical: boolean;
}

export const ProjectMiniature = ({index, primaryImage, activeIndex, setActiveIndex,
    opacityForAllImages, setOpacityForAllImages, otherImages, zIndex, title, isVertical} : ProjectMiniatureProps) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const getPercentage = (num: number): string => {
        if(!isDesktopOrLaptop){
            num = num*2;
        }
        
        if(isVertical){
            num = num/2;
        }
        return `${num}%`
    }

    const getNumberFromPercentage = (num: string): number => {
        return Number(num.slice(0, num.length-1));
    }
    
    const [height, setHeight] = useState(getPercentage(constants.lowSizePercent));
    const [img, setImg] = useState(constants.cdnBaseUrl + primaryImage);
    const [currentOtherImageIndex, setCurrentOtherImageIndex] = useState(0);

    useEffect(() => {

        if(!isDesktopOrLaptop){
            setHeight(getPercentage(constants.lowSizePercent*2))
        } else {
            setHeight(getPercentage(constants.lowSizePercent))
        }
    }, [isDesktopOrLaptop]);
    
    const handleClick = () => {
        if(activeIndex === index){
            if(isDesktopOrLaptop)
                setHeight(getPercentage(constants.lowSizePercent));
            setActiveIndex(-1);
            setOpacityForAllImages(constants.fullOpacity);
        } else if(activeIndex < 0){
            setActiveIndex(index);
            if(isDesktopOrLaptop)
                setHeight(getPercentage(constants.lowSizePercent*2));
            setOpacityForAllImages(constants.lowOpacity);
        }
    }

    const nextImage = async () => {
        const image = otherImages[currentOtherImageIndex];
        setImg(cdnBaseUrl + image);
        if(currentOtherImageIndex < otherImages.length - 1){
            setCurrentOtherImageIndex(currentOtherImageIndex + 1);
        }
    }

    const previousImage = async () => {
        if(currentOtherImageIndex === 0){
            setImg(cdnBaseUrl + primaryImage);
            return;
        }

        const image = otherImages[currentOtherImageIndex];
        setImg(cdnBaseUrl + image);
        if(currentOtherImageIndex > 0){
            setCurrentOtherImageIndex(currentOtherImageIndex - 1);
        }
    }

    return (
        <div className={'miniature-image-container'}
            style={{width: height, height: height}}
            >
                {activeIndex === index ? <NextButton content='previous' onClick={previousImage}/> : <div/>}
                    <Image 
                        onClick={() => handleClick()}
                        opacity={activeIndex === index? constants.fullOpacity : opacityForAllImages} 
                        img={img}
                        zIndex={zIndex}
                        />
                {activeIndex === index ? <NextButton content='next' onClick={nextImage}/> : <div/>}
                {activeIndex === index ? <h2>{title}</h2> : <div/>}
                
        </div>
    );
}