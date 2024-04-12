import { Link } from 'react-router-dom';
import './Cards.css';

function Cards({ products, brand, price }) {

  let filterProducts = products;

  if (brand !== 'All brands') {
    filterProducts = products.filter(product => product.brand === brand);
  }

  if (price !== 0) {
    filterProducts = filterProducts.filter(product => product.price === price);
  }

  return (
    <section className='card-container'>
      {filterProducts.map(product => (
        <div className="card" key={product.name}>
          <img className='cardimage' src={product.picture} alt={product.name} />
          <h4 className='cardtitle'>{product.brand} - {product.name}</h4>
          <p className='carddescription'>{product.engine}</p>
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