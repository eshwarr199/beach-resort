import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Bookingpage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [isBooked, setIsBooked] = useState(false); // State to track booking status
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { id: Date.now(), name, email, date }; // Add a unique ID for each booking
    const existingBookings = JSON.parse(localStorage.getItem('bookingDetails')) || [];
    existingBookings.push(bookingData);
    localStorage.setItem('bookingDetails', JSON.stringify(existingBookings));
    setIsBooked(true); // Update booking status to true
    alert("Room Booked Successfully!");
  };

  const handleCancelBooking = () => {
    localStorage.removeItem('bookingDetails');
    setIsBooked(false); // Update booking status to false
    alert("Booking Cancelled!");
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="booking-container">
      <div className="booking-content">
        <h2 className="booking-title">Room Booking</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="btn-primary">
            Book Room
          </button>
          {isBooked && ( // Show the "Cancel Booking" button only if room is booked
            <button type="button" onClick={handleCancelBooking} className="btn-primary">
              Cancel Booking
            </button>
          )}
        </form>
        <div className="back-button-container">
          <button onClick={handleGoBack} className="btn-primary back-button">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookingpage;
