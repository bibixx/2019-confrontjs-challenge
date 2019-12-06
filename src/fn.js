const fn = () => {
  const farmerFavouriteAnimals = [
    {
      emoji: "🐮",
      foodMadeFromAnimal: [
        '🍔'
      ]
    },
    {
      emoji: "🐓",
      foodMadeFromAnimal: [
        '🍗'
      ]
    },
    {
      emoji: "🐟",
      foodMadeFromAnimal: [
        '🍣'
      ]
    },
    {
      emoji: "🐟",
      foodMadeFromAnimal: [
        '🍣'
      ]
    },
    {
      emoji: "🐟",
      foodMadeFromAnimal: [
        '🍣'
      ]
    },
  ]

  const numberOfAnimalsAsString = ['1', '8', '0', '20', '13'];
  const numberOfAnimals = numberOfAnimalsAsString
    .map(Number.parseInt);

  const numberOfAnimalsSorted = numberOfAnimals.sort();

  const foodFromAnimals = numberOfAnimalsSorted
    .map((numberOfAnimals, i) => {
      const animal = farmerFavouriteAnimals[i];
      return `From ${animal.emoji}: ${String(numberOfAnimals).padStart(2, '0')} x ${animal.foodMadeFromAnimal[0]}`
    });

  const numberOfCows = numberOfAnimals[0];

  return {
    foodFromAnimals,
    numberOfCows
  };
}

module.exports = {
  fn,
};
