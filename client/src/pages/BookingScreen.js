import React from 'react'
import DefaultLayout from '../component/DefaultLayout'
import car2 from '../images/scorpio.jpg';

const carsData = [
  {
    id: 1,
    image: 'car2.jpg',
    name: 'Mahindra Thar',
    type: 'Petrol',
    price: '350/hr',
    mileage: '25 MPG',
    YearModel:'2019',
    otherDetails: 'Automatic transmission, Bluetooth connectivity, GPS navigation',
    bookLink: 'book-car1',
  },

];


const BookingScreen = () => {
  return (
    <div className="booking-screen">
      {carsData.map((car) => (
        <div key={car.id} className="car-card">
          <div className="booking-box">
            <div className="car-image-container">
              <img src={car2} alt='' className="car-image" />
            </div>
            <div className="car-details">
              <h4>{car.name}</h4>
              <p>{car.type}   {car.YearModel}</p>
              <p>{car.mileage}</p>
              <p>{car.otherDetails}</p>
              <h5>{car.price}</h5>
              {/* Payment button */}
              <button className="payment-button">Pay Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingScreen;