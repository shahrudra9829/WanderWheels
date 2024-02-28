import React, { useState } from 'react'
import DefaultLayout from '../component/DefaultLayout'
import carimage from '../images/new-virtus-01.webp'
import './DefaultLayout.css'; // Import CSS file for styling 
function Home() {
  // State for selected city
  const [selectedCity, setSelectedCity] = useState('');

  // State for selected from date
  const [selectedFromDate, setSelectedFromDate] = useState('');

  // State for selected to date
  const [selectedToDate, setSelectedToDate] = useState('');

  // State for selected time
  const [selectedTime, setSelectedTime] = useState('');

  // Hardcoded list of Indian cities
  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad"
    // Add more cities as needed
  ];

  // Handler for city selection
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Handler for from date selection
  const handleFromDateChange = (event) => {
    setSelectedFromDate(event.target.value);
  };

  // Handler for to date selection
  const handleToDateChange = (event) => {
    setSelectedToDate(event.target.value);
  };

  // Handler for time selection
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Handler for booking slot
  const handleBookSlot = () => {
    // Check if both from and to dates are selected
    if (selectedCity && selectedFromDate && selectedToDate && selectedTime) {
      // Convert selected dates to Date objects
      const fromDate = new Date(selectedFromDate);
      const toDate = new Date(selectedToDate);
    };
  };
  return (
      <div>

        <DefaultLayout>
          <div className='img-e'>
            <img src={carimage} alt="" />
            <p><i><b>"Be the medium of others destination"</b></i></p>
          </div>
        </DefaultLayout>
        <br />

        <div className="booking-form">
          <div className="form-row">
            <select className="form-control" value={selectedCity} onChange={handleCityChange}>
              <option value="">Select City</option>
              {indianCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <input type="date" className="form-control" value={selectedFromDate} onChange={handleFromDateChange} /> 
            <input type="date" className="form-control" value={selectedToDate} onChange={handleToDateChange}/> 
            <button className="btn btn-primary" onClick={handleBookSlot}>Book Slot</button>
          </div>
        </div>

        <section className='footer'>
          <section className='footer-heading-bar'>

            <div className='aboutus'>
              <h4>About Us</h4>
            </div>
            <div className='aboutus'>
              <h4>Company</h4>
            </div>
            <div className='aboutus'>
              <h4>Careers</h4>
            </div>

          </section>
          <div className='sub-description'>
            <h5>Rent a car in Vadodara</h5>
            <section>
              <p>Imagine the freedom to explore the vibrant streets of Baroda at your own pace, without the constraints of fixed schedules. Rent a car in Vadodara and enjoy the flexibility to choose when and where you want to go. Whether it's a business meeting, a weekend getaway, or just a leisurely drive through the city, a self-drive car ensures you get there comfortably and on time</p>
            </section>

          </div>
        </section>

      </div>

    );
  }

  export default Home