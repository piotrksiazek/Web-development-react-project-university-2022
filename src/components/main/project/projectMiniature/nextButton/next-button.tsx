import React from "react";
import "../project-miniature.scss"

export interface NextButtonProps {
    content: string;
}

export const NextButton = ({content} : NextButtonProps) => {
    return <button className='btn'>{content}</button>
}