import React from "react";

export interface ImageProps {
    img: string;
    onClick: () => void;
    opacity: string;
}

export const Image = ({img, onClick, opacity} : ImageProps) => {
    return <img
                onClick={onClick} 
                style={{opacity: opacity}} 
                className='img-primary' 
                src={img}
                alt=""
            />
}