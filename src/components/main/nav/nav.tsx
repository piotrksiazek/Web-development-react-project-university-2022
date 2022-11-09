import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.scss";

export interface NavProps {
	toggleZIndex: () => void;
}

export const Nav = ({toggleZIndex} : NavProps) => {

    const navRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const showNavbar = () => {
        const node = navRef.current;
	    node?.classList.toggle("responsive_nav");
		toggleZIndex();
	};

	const handleNavigate = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		navigate(path);
	}

    return (
        <header>
			<h3>Piotr Ksiazek</h3>
			<nav ref={navRef}>
				<a href="/#" onClick={(event) => handleNavigate("/", event)}>Home</a>
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