import React from 'react';

function FilterComponent({ label, options, selectedValue, onChange }) {
  return (
    <div className='filters'>
      <label>{label}</label>
      <select onChange={onChange} value={selectedValue}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterComponent;