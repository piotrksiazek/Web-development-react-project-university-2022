import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./nav.scss";

export interface NavProps {
	toggleZIndex: () => void;
}

export const Nav = ({toggleZIndex} : NavProps) => {
	const [isLanding, setIsLanding] = useState(false);
	const location = useLocation();
  
	useEffect(() => {
	  const current = window.location.pathname;
	  console.log(current);
  
	  if (current == '/') {
		setIsLanding(true);
	  } else {
		setIsLanding(false);
	  }
  
	  console.log(isLanding);
	}, [location]);
	
    const navRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const showNavbar = () => {
        const node = navRef.current;
	    node?.classList.toggle("responsive_nav");
		toggleZIndex();
	};

	const handleNavigate = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		showNavbar();
		navigate(path);
	}
	if(!isLanding){
		return (
			<header>
				<h3>Piotr Ksiazek</h3>
				<nav ref={navRef}>
					<a href="/#" onClick={(event) => handleNavigate("/", event)}>Home</a>
					<a href="/#" onClick={(event) => handleNavigate("/portfolio", event)}>My work</a>
					<a href="/#">Blog</a>
					<a href="/#" onClick={(event) => handleNavigate("/about", event)}>About me</a>
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
	return <></>
}