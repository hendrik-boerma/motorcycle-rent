import './Home.css';
import Title from '../Components/Title';
import Cards from '../Components/Cards';
import { bikes } from '../Data.js'
import { Link } from 'react-router-dom';

function Home() {

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }    

    const bikesHome = [getRandomElement(bikes), getRandomElement(bikes), getRandomElement(bikes)];
    console.log(bikesHome);

    return (
        <>
            <Title title="Rent your dream bike" description=""/>
            <Cards products={bikesHome} brand={'All brands'} price={0}/>
            <div className='seeMoreSection'>
            <Link className='seeMoreButton' to='/rentals'>See all rentals</Link>
            </div>
        </>

    );
}

export default Home;



