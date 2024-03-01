import './Nav.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {

  const [toggleMenu, setToggleMenu] = useState(false);
  
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
          <p className='logo'>BikeRent</p>
          </div>
            <ul className={toggleMenu ? "navlist-open" : "navlist-close"}>
            <Link to="/" onClick={handleTogglefunction}>Home</Link>
            <Link to="/About" onClick={handleTogglefunction}>About</Link>
            <Link to="/Rent" onClick={handleTogglefunction}>Rent</Link>
            </ul>
        </nav>
  );
}

export default Nav;