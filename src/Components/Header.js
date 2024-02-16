import './Header.css';
import HeaderImage from '../Images/headerimage.JPG'

function Header() {
  return (
    <header>
      <article>
        <h1>Ride Your Dream Bike</h1>
        <p>We have a wide range of bikes that you can rent. Please look at the bikes and have a beautiful ride.</p>
      </article>
      <img src={HeaderImage} alt='motorcycle riding coast route' />
    </header>
  );
}

export default Header;