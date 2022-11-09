import {
  BrowserRouter} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { AnimatedRoutes } from './components/routes/routes';
import { Nav } from "./components/main/nav/nav";
import { useState } from "react";

function App() {
  const [imgZIndex, setImgZIndex] = useState("0");
  const toggleImgZIndex = () => {
    if(imgZIndex === "-1"){
        setImgZIndex("0");
    } else {
        setImgZIndex("-1");
    }
}
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Nav toggleZIndex={toggleImgZIndex}/>
        <AnimatedRoutes imgZIndex={imgZIndex}/>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
