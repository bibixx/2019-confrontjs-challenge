const {
  fn,
} = require('./fn');

describe("fn", () => {
  const n = 15;

  it("should return array with correct names", async () => {
    expect(await fn(n)).toEqual([
      expect.objectContaining({
        "name": "John",
      }),
      expect.objectContaining({
        "name": "Amy",
      }),
      expect.objectContaining({
        "name": "Adam",
      }),
      expect.objectContaining({
        "name": "Emma",
      }),
    ]);
  });

  it("should return array with correct ids", async () => {
    expect(await fn(n)).toEqual([
      expect.objectContaining({
        "id": "john",
      }),
      expect.objectContaining({
        "id": "amy",
      }),
      expect.objectContaining({
        "id": "adam",
      }),
      expect.objectContaining({
        "id": "emma",
      }),
    ]);
  });

  it("should return array with correct ages", async () => {
    expect(await fn(n)).toEqual([
      expect.objectContaining({
        "age": 45,
      }),
      expect.objectContaining({
        "age": Infinity,
      }),
      expect.objectContaining({
        "age": 13,
      }),
      expect.objectContaining({
        "age": 0,
      }),
    ]);
  });

  it("should return array with correct number of pets", async () => {
    expect(await fn(n)).toEqual([
      expect.objectContaining({
        "numberOfPets": 1,
      }),
      expect.objectContaining({
        "numberOfPets": 2,
      }),
      expect.objectContaining({
        "numberOfPets": 0,
      }),
      expect.objectContaining({
        "numberOfPets": 9,
      }),
    ]);
  });
});
