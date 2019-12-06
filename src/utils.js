const peopleAges = {
  john: 45,
  amy: null,
  adam: 13,
  emma: 0,
};

/**
 *
 * @param {String} personId
 * @returns Promise<Number>
 */
const getPersonAge = (personId) => new Promise(
  (resolve) => setTimeout(
    () => resolve(peopleAges[personId]),
    10
  )
);

module.exports = { getPersonAge };
