import React from "react";
import "../landing.scss"

export interface LandingTextProps {
    wrapperClassName: string;
    innerClassName: string;
}


export const LandingText = ({wrapperClassName, innerClassName}: LandingTextProps) => {
    return (
        <div className={wrapperClassName}> 
            <div className={innerClassName}>
                Portfolio
            </div>
        </div>
    )
}