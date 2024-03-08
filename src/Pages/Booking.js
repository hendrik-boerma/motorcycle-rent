import './Booking.css';
import { bikes } from '../Data.js'

function Booking({ index }) {
  return (
    <section>
    <img className='productimage' src={bikes[index].picture} alt={bikes[index].name} />
    <article>
            <h4 className='producttitle' >{bikes[index].name}</h4>
            <p className='productdescription'>{bikes[index].description}</p>
            <p className="productprice">${bikes[index].price} <span>per day</span></p>
    </article>
    </section>
  )
}

export default Booking;