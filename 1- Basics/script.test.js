const getCurrentDayAndTime = require('./script');

describe('getCurrentDayAndTime', () => {
  test('returns formatted string for a specific date (Tuesday 10 PM)', () => {
    // Mock date: Tuesday, October 10, 2023 22:30:38
    const mockDate = new Date('2023-10-10T22:30:38');
    const result = getCurrentDayAndTime(mockDate);
    const expected = "Today is : Tuesday.\nCurrent time is : 10 PM : 30 : 38";
    expect(result).toBe(expected);
  });

  test('returns formatted string for Midnight (12 AM)', () => {
    const mockDate = new Date('2023-10-08T00:05:05');
    const result = getCurrentDayAndTime(mockDate);
    const expected = "Today is : Sunday.\nCurrent time is : 12 AM : 5 : 5";
    expect(result).toBe(expected);
  });

  test('returns formatted string for Noon (12 PM)', () => {
    const mockDate = new Date('2023-10-09T12:15:00');
    const result = getCurrentDayAndTime(mockDate);
    const expected = "Today is : Monday.\nCurrent time is : 12 PM : 15 : 0";
    expect(result).toBe(expected);
  });
});