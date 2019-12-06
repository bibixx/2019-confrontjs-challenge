const fn = () => {
  const farmerFavouriteAnimals = [
    {
      emoji: '🐮',
      foodMadeFromAnimal: [
        '🍔',
      ],
    },
    {
      emoji: '🐓',
      foodMadeFromAnimal: [
        '🍗',
      ],
    },
    {
      emoji: '🐟',
      foodMadeFromAnimal: [
        '🍣',
      ],
    },
    {
      emoji: '🐟',
      foodMadeFromAnimal: [
        '🍣',
      ],
    },
    {
      emoji: '🐟',
      foodMadeFromAnimal: [
        '🍣',
      ],
    },
  ];

  const numberOfAnimalsAsString = ['1', '8', '0', '20', '13'];
  const numberOfAnimals = numberOfAnimalsAsString
    .map((n) => Number.parseInt(n, 10));

  const numberOfAnimalsSorted = [...numberOfAnimals].sort((a, b) => a - b);

  const foodFromAnimals = numberOfAnimalsSorted
    .map((n, i) => {
      const animal = farmerFavouriteAnimals[i];
      return `From ${animal.emoji}: ${String(n).padStart(2, '0')} x ${animal.foodMadeFromAnimal[0]}`;
    });

  const numberOfCows = numberOfAnimals[0];

  return {
    foodFromAnimals,
    numberOfCows,
  };
};

module.exports = {
  fn,
};
