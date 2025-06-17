// bookingReducer.test.js
import { initializeTimes, updateTimes } from './bookingReducer';
import { fetchAPI } from './api';

jest.mock('./api'); // mock fetchAPI

describe('bookingReducer', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
  });

  test('initializeTimes returns fetched times', () => {
    const mockTimes = ['17:00', '18:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const date = new Date();
    const result = initializeTimes(date);

    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(date);
  });

  test('updateTimes returns times for a given date', () => {
    const mockTimes = ['19:00', '20:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: 'UPDATE_TIMES', payload: new Date() };
    const result = updateTimes([], action);

    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(action.payload);
  });

  test('updateTimes returns current state if action type is unknown', () => {
    const state = ['17:00'];
    const action = { type: 'UNKNOWN', payload: new Date() };

    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });
});
