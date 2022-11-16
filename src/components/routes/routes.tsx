import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../about/about";
import { Landing } from "../landing/landing";
import { Main } from "../main/main";

export interface AnimatedRoutesProps {
  imgZIndex: string;
}

export const AnimatedRoutes = ({imgZIndex} : AnimatedRoutesProps) => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Landing/> } />
          <Route path="/portfolio" element={<Main imgZIndex={imgZIndex}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    );
}