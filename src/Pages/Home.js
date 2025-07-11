import './Home.css';
import Title from '../Components/Title';
import Cards from '../Components/Cards';
import { bikes } from '../Data.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Home() {

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }    

    const bikesHome = [getRandomElement(bikes), getRandomElement(bikes), getRandomElement(bikes)];
    console.log(bikesHome);

    return (
        <>
            <Title text='Rent a bike'/>
            <Cards products={bikesHome} brand={'All brands'} price={0}/>
            <div className='seeMoreSection'>
            <Link className='seeMoreButton' to='/rentals'>See all rentals <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
        </>

    );
}

export default Home;



