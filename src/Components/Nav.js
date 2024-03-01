import './Nav.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {

  const [toggleMenu, setToggleMenu] = useState(false);

  function closeTogglefunction() {
    const toggleAnimation = document.querySelector('.toggle-button');
    window.scrollTo(0, 0);
    setToggleMenu(false);
    toggleAnimation.classList.remove('active');
  }

  function handleTogglefunction() {
    const toggleAnimation = document.querySelector('.toggle-button');
    if (!toggleMenu) {
      toggleAnimation.classList.add('active');
    } else {
      toggleAnimation.classList.remove('active');
    }
      setToggleMenu(!toggleMenu);
  }

  return (
        <nav className={toggleMenu ? "nav-open" : "nav-close"}>
          <div className='navbar'>
          <button className='toggle-button' onClick={handleTogglefunction}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link className='logo' to="/motorcycle-rent" onClick={closeTogglefunction}>BikeRent</Link>
          </div>
            <ul className={toggleMenu ? "navlist-open" : "navlist-close"}>
            <Link className="link" to="/Rentals" onClick={closeTogglefunction}>Rentals</Link>
            <Link className="link" to="/About" onClick={closeTogglefunction}>About</Link>
            </ul>
        </nav>
  );
}

export default Nav;