import './Nav.css';
import logo from '../Images/Logo.png'
import { useState } from 'react';

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
          <img className='logo' src={logo} alt='logo'/>
          </div>
            <ul className={toggleMenu ? "navlist-open" : "navlist-close"}>
                <li>Home</li>
                <li>About</li>
                <li>Rent</li>
            </ul>
        </nav>
  );
}

export default Nav;