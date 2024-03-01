import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Rent from '../Pages/Rent.js';

function Routing () {

    return (
      <Routes basename="/">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    );
}

export default Routing;