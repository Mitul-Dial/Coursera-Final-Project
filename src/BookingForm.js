import React, { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== '';
    setFormValid(isValid);
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Booking form"
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'grid',
        gap: '1.5rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        Book Your Reservation
      </h3>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
          aria-label="Reservation date"
        />
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Reservation time"
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min="1"
          max="10"
          required
          aria-label="Number of guests"
        />
      </div>

      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-label="Occasion type"
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={!formValid}
        aria-label="Make your reservation"
        style={{
          backgroundColor: formValid ? '#495E57' : '#ccc',
          color: '#fff',
          border: 'none',
          padding: '0.75rem',
          borderRadius: '8px',
          cursor: formValid ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
        }}
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
