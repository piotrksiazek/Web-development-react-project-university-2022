export interface ImageProps {
    img: string;
    onClick: () => void;
    opacity: string;
    zIndex: string;
}

export const Image = ({img, onClick, opacity, zIndex} : ImageProps) => {
    return <img
                onClick={onClick} 
                style={{opacity: opacity, zIndex: zIndex}} 
                className='img-primary' 
                src={img}
                alt=""
                loading="lazy"
            />
}