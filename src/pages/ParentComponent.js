// ParentComponent.js
import React, { useState } from 'react';
import Bookingpage from './Bookingpage'; // Adjust the import path as necessary

const ParentComponent = () => {
  const [bookingDetails, setBookingDetails] = useState({});

  return (
    <Bookingpage setBookingDetails={setBookingDetails} />
  );
};

export default ParentComponent;
