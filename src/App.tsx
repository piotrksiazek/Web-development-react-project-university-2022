import './App.css';
import {
  BrowserRouter} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { AnimatedRoutes } from './components/routes/routes';

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
