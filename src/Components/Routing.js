import { Route, Routes, useLocation } from "react-router-dom";
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Rent from '../Pages/Rent.js';
import Booking from '../Pages/Booking.js';
import { useEffect } from "react";
import { bikes } from '../Data.js'

function Routing() {
  const location = useLocation();

  useEffect(() => {
    console.log('Path changed:', location.pathname);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

  return (
    <Routes basename="/">
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rent />} />
      <Route path="/about" element={<About />} />
      {bikes.map(bike => (
        <Route key={bike.name} path={`/booking/${bike.link}`} element={<Booking index={bike.index} />} />
      ))}
    </Routes>
  );
}

export default Routing;