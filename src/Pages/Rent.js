import './Rent.css';
import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';
import Cards from '../Components/Cards';
import { brands, bikes, prices } from '../Data.js';
import FilterComponent from '../Components/Filters.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Rent() {
  const [selectedBrand, setSelectedBrand] = useState('All brands');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [filteredPrice, setFilteredPrice] = useState(prices);

  useEffect(() => {
    if (selectedBrand !== 'All brands') {
        const brandBikes = bikes.filter(bike => bike.brand === selectedBrand);
        const availablePrices = brandBikes.map(bike => parseFloat(bike.price));
        const uniquePrices = [...new Set(availablePrices)];
        setFilteredPrice(uniquePrices);
    } else {
        setFilteredPrice(prices);
    }
  },[selectedBrand])

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedPrice(0);
  };

  const handlePriceChange = (event) => {
    if (event.target.value === 'All prices') {
        setSelectedPrice(0);
    } else {
        const price = parseFloat(event.target.value);
        setSelectedPrice(price);
    }
  };

  function removeFilter() {
    setSelectedBrand('All brands');
    setSelectedPrice(0);
  }

  return (
    <>
      <Title text='Rentals'/>
      <section className='filterSection'>
        <FilterComponent
          label="Brand"
          options={['All brands', ...brands]}
          selectedValue={selectedBrand}
          onChange={handleBrandChange}
        />
        <FilterComponent
          label="Price"
          options={['All prices', ...filteredPrice]}
          selectedValue={selectedPrice}
          onChange={handlePriceChange}
        />
        <button className='removeButton' onClick={removeFilter}><FontAwesomeIcon icon={faXmark} /> remove filters</button>
      </section>
      <Cards products={bikes} brand={selectedBrand} price={selectedPrice} />
    </>
  );
}

export default Rent;