import { Route, Routes, useLocation } from "react-router-dom";
import { Landing } from "../landing/landing";
import { Main } from "../main/main";

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <Landing/> } />
          <Route path="/portfolio" element={<Main/>}/>
        </Routes>
    );
}