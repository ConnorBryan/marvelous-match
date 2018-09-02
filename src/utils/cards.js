/**
 * @typedef Card
 * @property {string} type
 * @property {number} value
 * @property {string} expression
 */

/**
 * @function getRandomIndex
 * @desc Chooses a random index in an array.
 * @param {Array<any>} array
 * @returns {any}
 */
export const getRandomIndex = array =>
  array[Math.floor(Math.random() * array.length)];

/**
 * @function shuffle
 * @desc Changes the order of each item in an array.
 * @param {Array<any>} array
 * @returns {Array<any}
 */
export const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * @function initializePack
 * @desc Selects a random entry in a pack, shuffles is,
 *  and adds the 'done' and 'visible' properties initialized
 *  to false.
 * @param {Array<Array<Card>>} pack
 * @returns {Array<Card>}
 */
export const initializePack = pack =>
  shuffle(
    getRandomIndex(pack).map(card => ({ ...card, done: false, visible: false }))
  );

export const getDecimalsAsInteger = number => {
  const string = Number.parseFloat(number).toFixed(2);
  const digits = string
    .split(".")
    .splice(1, string.length)
    .join("");

  return Number.parseInt(digits, 10);
};

/**
 * @function initializeGrid
 * @desc Creates a two-dimensional grid filled
 *  with the card from a pack.
 * @param {Array<Card>} pack
 * @param {number} rows
 * @param {number} columns
 * @returns {Array<Array<Card>>}
 */
export const initializeGrid = (pack, rows, columns) => {
  const span = getDecimalsAsInteger(1 / columns);

  return pack.reduce((prev, next, index) => {
    const position = index + 1;

    if (position > rows * columns) {
      return prev;
    }

    const raw = position / columns;
    const distance = getDecimalsAsInteger(raw);
    const row = Math.ceil(raw) - 1;
    const column =
      distance === 0
        ? columns - 1
        : Math.floor(getDecimalsAsInteger(raw) / span) - 1;

    prev[row][column] = next;

    return prev;
  }, Array.from({ length: rows }, () => new Array(columns)));
};

/**
 * @function cloneGrid
 * @desc Creates a deep copy of a grid to prevent mutation.
 * @param {Array<Array<Card>>} grid
 * @returns {Array<Array<Card>>}
 */
export const cloneGrid = grid =>
  grid.map(row => row.map(card => Object.assign({}, card)));

/**
 * @function convertGridToPack
 * @desc Transforms a two-dimensional grid back into a flat array.
 * @param {Array<Array<Card>>} grid
 * @returns {Array<Card>}
 */
export const convertGridToPack = grid =>
  grid.reduce((prev, next) => prev.concat(next), []);

/**
 * @function isGridComplete
 * @desc Returns true if every card in the grid is done.
 * @param {Array<Array<Card>>} grid
 * @returns {boolean}
 */
export const isGridComplete = grid =>
  convertGridToPack(grid).every(card => card.done);
