import BookingForm from './BookingForm';

function Reservation({ availableTimes, dispatch, submitForm }) {
  return (
    <section aria-labelledby="reservation-heading">
      <h2 id="reservation-heading">Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default Reservation;
