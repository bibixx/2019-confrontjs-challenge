const {
  fn,
} = require('./fn');

describe('fn', () => {
  it('should not return fn as undefined', () => {
    expect(fn).not.toBeUndefined();
  });
});
