import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Reservation from './Reservation';
import { fetchAPI } from './api';

const submitAPI = (formData) => {
  return window.submitAPI(formData);
};

// Reducer functions
const initializeTimes = () => fetchAPI(new Date());

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <>
      <main>
        <section
          className="specials-container"
          aria-labelledby="weekly-specials-heading"
        >
          <h2 id="weekly-specials-heading">This week's specials!</h2>
          <button aria-label="View Online Menu">Online Menu</button>

          <div className="cards">
            <article className="card">
              <img
                src="/images/greek-salad.jpg"
                alt="A bowl of Greek salad with lettuce, peppers, olives, and feta"
              />
              <h3>Greek Salad</h3>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives, and our
                Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.
              </p>
            </article>

            <article className="card">
              <img
                src="/images/bruschetta.png"
                alt="Toasted bruschetta slices with garlic and olive oil"
              />
              <h3>Bruschetta</h3>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
              </p>
            </article>

            <article className="card">
              <img
                src="/images/lemon-dessert.jpg"
                alt="Lemon dessert topped with cream and mint"
              />
              <h3>Lemon Dessert</h3>
              <p>
                This comes straight from grandma’s recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
            </article>
          </div>
        </section>

        {/* Booking Section */}
        <section aria-label="Reservation Section">
          <Reservation
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </section>
      </main>
    </>
  );
}

export default Main;
