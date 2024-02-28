import React from 'react'

function CarSelection() {
  return (
    <div className='filter'>
      <section className='filter-header'>
        <h4>Filter</h4>
      </section>
      <section className='filter-description'>
        <h5>Car type</h5>
        <label className='radio-input'> <input type='radio' value={'SUV'}/>SUV </label>
        <label className='radio-input'> <input type='radio' value={'Sedan'}/>Sedan </label>
        <label className='radio-input'> <input type='radio' value={'Hetchback'}/>Hetchback </label>
        
      </section>
      <section className='filter-description'>
        <h5>Fuel type</h5>
        <label className='radio-input'> <input type='radio' value={'Petrol'}/>Petrol </label>
        <label className='radio-input'> <input type='radio' value={'Diesal'}/>Diesal </label>
        <label className='radio-input'> <input type='radio' value={'Electric'}/>Electric </label>
      </section>
      <section className='filter-description'>
        <h5>No of seater</h5>
        <label className='radio-input'> <input type='radio' value={'5 Seater'}/>5 Seater </label>
        <label className='radio-input'> <input type='radio' value={'7 Seater'}/>7 Seater </label>
        
      </section>
      <section className='filter-description'>
        <h5>Transmission</h5>
        <label className='radio-input'> <input type='radio' value={'Manual'}/>Manual </label>
        <label className='radio-input'> <input type='radio' value={'Automatic'}/>Automatic </label>
        
      </section>
    </div>
  )
}

export default CarSelection