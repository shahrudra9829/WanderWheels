import React from 'react'
import listedcar from '../images/car-data.jpg'
import scorpio from '../images/scorpio.jpg'
import { Link } from 'react-router-dom'


function CarSelection() {
  return (
    <div className='car-list'>
      <section className='filter'>
        <section className='filter-header'>
          <h4>Filter</h4>
        </section>
        <section className='filter-description'>
          <h5>Car type</h5>
          <label className='radio-input'> <input type='radio' value={'SUV'} />SUV </label>
          <label className='radio-input'> <input type='radio' value={'Sedan'} />Sedan </label>
          <label className='radio-input'> <input type='radio' value={'Hetchback'} />Hetchback </label>

        </section>
        <section className='filter-description'>
          <h5>Fuel type</h5>
          <label className='radio-input'> <input type='radio' value={'Petrol'} />Petrol </label>
          <label className='radio-input'> <input type='radio' value={'Diesal'} />Diesal </label>
          <label className='radio-input'> <input type='radio' value={'Electric'} />Electric </label>
        </section>
        <section className='filter-description'>
          <h5>No of seater</h5>
          <label className='radio-input'> <input type='radio' value={'5 Seater'} />5 Seater </label>
          <label className='radio-input'> <input type='radio' value={'7 Seater'} />7 Seater </label>

        </section>
        <section className='filter-description'>
          <h5>Transmission</h5>
          <label className='radio-input'> <input type='radio' value={'Manual'} />Manual </label>
          <label className='radio-input'> <input type='radio' value={'Automatic'} />Automatic </label>

        </section>
      </section> 
      <div className='car-data-display'>
        <div className='car-list-right'>
          <img className='img-size' src={listedcar} alt="safari"></img>
          <h6>Tata Safari </h6>
          <p><i>5 Seater-Automatic-Diesel</i></p>
          <hr/>
          <p>Rs.250/hr</p>
          <div className='button-container'>
          <button><Link to='/BookingScreen'>Book car</Link></button></div>

        </div>
        <br/>
        <div className='car-list-right'>
          <img className='img-size' src={scorpio} alt="scorpio"></img>
          <h6>Mahindra Scorpio</h6>
          <p><i>5 Seater-Manual-Petrol</i></p>
          <hr/>
          <p>Rs.300/hr</p>
          <div className='button-container'>
          <button>Book Car</button></div>
        </div>
        <br/>

        <div className='car-list-right'>
          <img className='img-size' src={scorpio} alt="comet"></img>
          <h6>MG Comet</h6>
          <p><i>4 Seater-Automatic-Electric</i></p>
          <hr/>
          <p>Rs.100/hr</p>
          <div className='button-container'>
          <button>Book Car</button></div>
        </div>
      </div>
    </div>
  )
}

export default CarSelection