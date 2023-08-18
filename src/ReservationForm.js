import React, { useState } from 'react';


const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', {
      name,
      email,
      date,
      partySize,
    });
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
    </div>
  );
};

export default ReservationForm;