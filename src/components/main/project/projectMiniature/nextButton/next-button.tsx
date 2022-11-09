import React from "react";
import "../project-miniature.scss"

export interface NextButtonProps {
    content: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const NextButton = ({content, onClick} : NextButtonProps) => {
    return <button className='btn' onClick={onClick}>{content}</button>
}