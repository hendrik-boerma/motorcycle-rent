import './Booking.css';
import { bikes } from '../Data.js'

function Booking() {
  return (
    <section>
            <h4 className='cardtitle' >{bikes[0].name}</h4>
    </section>
  )
}

export default Booking;