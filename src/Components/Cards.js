import './Cards.css';
import { bikes } from '../Data.js'

function Cards() {
  return (
    <section className='card-container'>
      {bikes.map(bike => (
        <div className="card" key={bike.name}>
          <img className='cardimage' src={bike.picture} alt={bike.name} />
            <h4 className='cardtitle' >{bike.name}</h4>
            <p className='carddescription'>{bike.description}</p>
            <div>
              <p className="cardprice">${bike.price} <span>per day</span></p>
              <button className="cardbutton">Book now</button>
            </div>
        </div>))
      }
    </section>
  )
}

export default Cards;