import './Cards.css';
import Button from './Button';

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
          <h2 className='cardtitle'>{product.brand} - {product.name}</h2>
          <p className='carddescription'>{product.engine}</p>
          <div>
            <p className="cardprice">${product.price} <span>per day</span></p>
            <Button buttonlink={`/booking/${product.link}`} text='Book now'/>
          </div>
        </div>))
      }
    </section>
  )
}

export default Cards;