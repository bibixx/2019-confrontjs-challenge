const {
  fn,
} = require('./fn');

describe('fn', () => {
  it('should not return fn as undefined', () => {
    expect(fn).not.toBeUndefined();
  });

  it('should animals sorted by food', async () => {
    expect(await fn().foodFromAnimals).toEqual(
      [
        'From 🐮: 00 x 🍔',
        'From 🐓: 01 x 🍗',
        'From 🐟: 08 x 🍣',
        'From 🐟: 13 x 🍣',
        'From 🐟: 20 x 🍣',
      ]
    );
  });

  it('should return number of cows', async () => {
    expect(await fn().numberOfCows).toBe(1);
  });
});
