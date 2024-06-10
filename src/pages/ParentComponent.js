
import React, { useState } from 'react';
import Bookingpage from './Bookingpage'; 

const ParentComponent = () => {
  const [bookingDetails, setBookingDetails] = useState({});

  return (
    <Bookingpage setBookingDetails={setBookingDetails} />
  );
};

export default ParentComponent;
