// bookingReducer.js
import { fetchAPI } from './api';

export const initializeTimes = (date) => {
  return fetchAPI(date);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};
