import React, { useState } from "react";
import Footer from "../components/Footer";

const Bookings = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleCheckBooking = () => {
    const storedDetails = JSON.parse(localStorage.getItem("bookingDetails")) || [];
    const filteredBookings = storedDetails.filter(
      booking => booking.name === enteredName && booking.email === enteredEmail
    );
    if (filteredBookings.length > 0) {
      setBookingDetails(filteredBookings);
    } else {
      setBookingDetails(null);
      alert("No booking found for provided details");
    }
  };

  const handleCancelBooking = (id) => {
    const updatedBookings = bookingDetails.filter(booking => booking.id !== id);
    localStorage.setItem('bookingDetails', JSON.stringify(updatedBookings));
    setBookingDetails(updatedBookings);
    alert("Booking Cancelled Successfully!");
  };

  return (
    <div className="bookings-container">
      <h2>User Details</h2>
      <div className="form-group">
        <label htmlFor="enteredName">Enter Name:</label>
        <input
          type="text"
          id="enteredName"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          required
          className="small-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="enteredEmail">Enter Email:</label>
        <input
          type="email"
          id="enteredEmail"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
          required
          className="small-input"
        />
      </div>
      <button onClick={handleCheckBooking} className="btn-primary">
        Check Booking
      </button>
      {bookingDetails ? (
        <div className="booking-details">
          {bookingDetails.map(booking => (
            <div key={booking.id}>
              <p>Name: {booking.name}</p>
              <p>Email: {booking.email}</p>
              <p>Date: {booking.date}</p>
              <button onClick={() => handleCancelBooking(booking.id)} className="btn-cancel">
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      ) : null}
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Footer />

    </div>
  );
};

export default Bookings;
