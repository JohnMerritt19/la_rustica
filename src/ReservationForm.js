import React, { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState('');

  const [notification, setNotification] = useState({
    message: '',
    type: 'success',
    show: false,
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', {
      name,
      email,
      date,
      partySize,
    });

    const message = 'Reservation request Received, We will confirm your reservation via phone or email.';
    const type = 'success';

    setNotification({ message, type, show: true });


  };

  return (
    <div className="reservation-form">
      <h2>Make a Dinner Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Party Size:
          <input
            type="number"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            min="1"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className={`notification ${notification.type}${notification.show ? ' show' : ''}`}>
        {notification.message}
      </div>
    </div>
  );
};

export default ReservationForm;