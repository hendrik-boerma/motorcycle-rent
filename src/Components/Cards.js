import './Cards.css';
import { bikes } from '../Data.js'

function Cards() {
  return (
    <div className='card-container'>
      {bikes.map(bike => (
        <div className="card" key={bike.name}>
          <img className='cardimage' src={bike.picture} alt={bike.name} />
          <h4 className='cardtitle' >{bike.name}</h4>
          <p className='carddescription'>{bike.description}</p>
          <div>
            <p className="cardprice">${bike.price} <span>per day</span></p>
            <button className="cardbutton">Rent this bike</button>
          </div>
        </div>))
      }
    </div>

  )
}

export default Cards;