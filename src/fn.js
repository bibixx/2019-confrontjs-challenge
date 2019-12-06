const {
  getPersonAge,
} = require('./utils');

const get = (obj, [currentProp, ...path]) => {
  if (currentProp === undefined) {
    return obj;
  }

  const v = obj[currentProp];

  if (!v) {
    return undefined;
  }

  return get(v, path);
};

const fn = async () => {
  const arr = [];
  const people = [{
    name: 'John',
    id: 'john',
    numberOfPets: 1,
  },
  {
    name: 'Amy',
    id: 'amy',
    numberOfPets: 2,
  },
  {
    name: 'Adam',
    id: 'adam',
    numberOfPets: 0,
  },
  {
    name: 'Emma',
    id: 'emma',
    numberOfPets: 9,
  },
  ];

  for (i = 0; i < people.length; i++) {
    arr.push(
      getPersonAge(people[i].id)
        .then((personAge) => ({
          name: get(people, [i, 'name']),
          id: get(people, [i, 'id']),
          numberOfPets: get(people, [i, 'numberOfPets']),
          age: isNaN(+personAge) ? Infinity : personAge,
        })),
    );
  }

  return Promise.all(arr);
};

module.exports = {
  fn,
};
