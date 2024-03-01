import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Rent from '../Pages/Rent.js';

function Routing () {

    return (
      <>
      <Routes basename="/motorcycle-rent">
        <Route path="/motorcycle-rent" element={<Home />} />
        <Route path="/rentals" element={<Rent />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </>
    );
}

export default Routing;