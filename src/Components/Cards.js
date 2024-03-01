import { Link } from 'react-router-dom';
import './Cards.css';

function Cards({products}) {
  return (
    <section className='card-container'>
      {products.map(product => (
        <div className="card" key={product.name}>
          <img className='cardimage' src={product.picture} alt={product.name} />
            <h4 className='cardtitle' >{product.name}</h4>
            <p className='carddescription'>{product.description}</p>
            <div>
              <p className="cardprice">${product.price} <span>per day</span></p>
              <Link to={`/booking/${product.link}`} className="cardbutton">Book now</Link>
            </div>
        </div>))
      }
    </section>
  )
}

export default Cards;