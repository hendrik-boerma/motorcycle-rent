import './Header.css';
import HeaderImage from '../Images/headerimage.JPG'

function Header() {
  return (
    <header>
      <article>
        <h1>Ride Your Dream Bike</h1>
        <p>Embark on a journey of discovery and freedom as you pedal through the cityscape on the bike of your dreams. Our premium selection ensures a ride like no other, where comfort meets style and every turn unveils a new adventure.</p>
        <button>Discover Your Ride</button>
      </article>
      <img src={HeaderImage} alt='motorcycle riding coast route' />
    </header>
  );
}

export default Header;