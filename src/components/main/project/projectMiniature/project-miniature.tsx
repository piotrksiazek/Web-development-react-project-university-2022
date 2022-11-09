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
    otherImages: Array<string>;
    zIndex: string;
    title: string;
}

export const ProjectMiniature = ({index, primaryImage, activeIndex, setActiveIndex, opacityForAllImages, setOpacityForAllImages, otherImages, zIndex, title} : ProjectMiniatureProps) => {
    const [style, setStyle] = useState(constants.lowSizePercent)
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [img, setImg] = useState("");
    const [otherImagesLoaded, setOtherImagesLoaded] = useState<Array<string>>([]);
    const [currentOtherImageIndex, setCurrentOtherImageIndex] = useState(0);
    
    const handleClick = () => {
        if(activeIndex === index){
            setStyle(constants.lowSizePercent);
            setActiveIndex(-1);
            setOpacityForAllImages(constants.fullOpacity);
        } else if(activeIndex < 0){
            setActiveIndex(index);
            setStyle(constants.fullSizePercent);
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

    const nextImage = async () => {
        const image = otherImages[currentOtherImageIndex];
        setIsImgLoaded(false);
        fetchImage(cdnBaseUrl + image);
        if(currentOtherImageIndex < otherImages.length - 1){
            setCurrentOtherImageIndex(currentOtherImageIndex + 1);
        }
    }

    const previousImage = async () => {
        if(currentOtherImageIndex === 0){
            fetchImage(cdnBaseUrl + primaryImage);
            return;
        }

        const image = otherImages[currentOtherImageIndex];
        setIsImgLoaded(false);
        fetchImage(cdnBaseUrl + image);
        if(currentOtherImageIndex > 0){
            setCurrentOtherImageIndex(currentOtherImageIndex - 1);
        }
    }

    useEffect(() => {
        fetchImage(cdnBaseUrl + primaryImage);
        const fetchImages = async () => {
            for(let item of otherImages){
                const res = await fetch(cdnBaseUrl + item);
                const imageBlob = await res.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setOtherImagesLoaded([...otherImagesLoaded, imageObjectURL]);
            }
        }
        fetchImages();
      }, []);

    if(isImgLoaded)
    {
        return (
            <div className={'miniature-image-container'}
                style={{width: style, height: style}}
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
    } else {
        return (
            <div className={'loader'}>
                <ClipLoader
                    
                />
            </div>
        )
    }
}