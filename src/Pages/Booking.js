import './Booking.css';
import Button from '../Components/Button';
import { bikes } from '../Data.js'

function Booking({ index }) {
  return (
    <section className='bookingsection'>
    <img className='productimage' src={bikes[index].picture} alt={bikes[index].name} />
    <article>
            <h1>{bikes[index].brand} - {bikes[index].name}</h1>
            <h2>{bikes[index].engine}</h2>
            <p className="productprice">${bikes[index].price} <span>per day</span></p>
            <p className='productdescription'>{bikes[index].description}</p>
            <Button buttonlink='' text='Book this bike'/>
    </article>
    </section>
  )
}

export default Booking;