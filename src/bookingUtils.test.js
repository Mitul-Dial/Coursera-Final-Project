import { initializeTimes, updateTimes } from './bookingUtils';

test('initializeTimes returns default time slots', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns same values as initializeTimes', () => {
  const result = updateTimes([], { type: 'UPDATE_TIMES', date: '2025-06-16' });
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
