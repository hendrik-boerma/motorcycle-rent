import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Rent from '../Pages/Rent.js';
import Booking from '../Pages/Booking.js';
import { useEffect } from "react";

function Routing () {
  const location = useLocation();

  useEffect(() => {
    console.log('Path changed:', location.pathname);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

    return (
      <Routes basename="/motorcycle-rent">
        <Route path="/motorcycle-rent" element={<Home />} />
        <Route path="/rentals" element={<Rent />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking/livewire" element={<Booking index={0}/>} />
        <Route path="/booking/pan_america" element={<Booking index={1}/>} />
        <Route path="/booking/fat_bob" element={<Booking index={2}/>} />
        <Route path="/booking/streetfighter" element={<Booking index={3}/>} />
      </Routes>
    );
}

export default Routing;