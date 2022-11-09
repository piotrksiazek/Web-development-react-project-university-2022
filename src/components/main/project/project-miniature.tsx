import React, { useEffect, useState } from 'react';
import { cdnBaseUrl } from '../../../constants';
import { ClipLoader } from 'react-spinners';
import "./project-miniature.scss";

interface PrimaryProps {
    img: string;
    onClick: () => void;
    opacity: string;
}

const Primary = ({img, onClick, opacity} : PrimaryProps) => {
    return <img
                onClick={onClick} 
                style={{opacity: opacity}} 
                className='img-primary' 
                src={img}
                alt=""
            />
}


export interface ProjectMiniatureProps{
    index: number;
    primaryImage: string;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectMiniature = ({index, primaryImage, activeIndex, setActiveIndex} : ProjectMiniatureProps) => {
    const [style, setStyle] = useState("50%")
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const [opacity, setOpacity] = useState("100%");
    const [img, setImg] = useState("");
    
    const handleClick = () => {
        if(activeIndex === index){
            setStyle("50%");
            setActiveIndex(-1);
            setOpacity("30%");
        } else if(activeIndex < 0){
            setActiveIndex(index);
            setStyle("90%");
            setOpacity("100%");
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
                    {activeIndex === index ? <button className='btn'>left</button> : <div/>}
                    <Primary 
                        onClick={() => handleClick()}
                        opacity={opacity} 
                        img={img}
                        />
                    {activeIndex === index ? <button className='btn'>right</button> : <div/>}
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