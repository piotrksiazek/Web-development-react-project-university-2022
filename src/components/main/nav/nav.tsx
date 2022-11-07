import React, { useRef, useState } from "react";
import "./nav.scss";

export interface NavProps {
    color: string;
}

export const Nav = ({color} : NavProps) => {

    const navRef = useRef<HTMLDivElement>(null);

	const showNavbar = () => {
        const node = navRef.current;
	    node?.classList.toggle("responsive_nav");
	};
    return (
        <header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
                        |||
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
                |||
			</button>
		</header>
    )
}