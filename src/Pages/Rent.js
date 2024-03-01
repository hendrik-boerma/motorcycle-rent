import './Rent.css';
import Cards from '../Components/Cards';
import Title from '../Components/Title';
import { bikes } from '../Data.js'

function Rent() {
    return (
        <>
            <Title title="Rentals" description=""/>
            <Cards products={bikes}/>
        </>
    );
}

export default Rent;