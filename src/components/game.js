import React from "react";

import Card from "./card";
import "./game.css";

// config/constants.js
export const CardTypes = {
  PRIME: "prime",
  EXPRESSION: "expression",
  VALUE: "value"
};

export const DifficultyLevels = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard"
};

export const PointTotals = {
  [DifficultyLevels.EASY]: 1,
  [DifficultyLevels.MEDIUM]: 40,
  [DifficultyLevels.HARD]: 30
};

export const GridDimensions = {
  ROWS: 5,
  COLUMNS: 5
};

export const GAME_TITLE = "Marvelous memory maths";
export const INITIALIZED_MESSAGE = "Select a card to begin.";
export const NEW_GAME = "New game";
export const HOW_TO_PLAY = "How to play";
export const NEW_GAME_MESSAGE = `You have started a new game.`;
export const MATCH_MESSAGE = (a, b) => `Match! ${a} equals ${b}.`;
export const NO_MATCH_MESSAGE = (a, b) => `Sorry! ${a} doesn't equal ${b}.`;
export const GAME_OVER_MESSAGE = "Game over.";
export const GAME_WON_MESSAGE = points =>
  `Finished! Your final score was ${points}.`;
export const GAME_EMPTY_MESSAGE = `Waiting for a new game...`;
export const CANNOT_SELECT_AGAIN = "You cannot select the same card twice.";
export const PRIME_BUTTON_TEXT = "Prime";
export const CARD_WAS_PRIME = value => `Correct! ${value} is indeed prime.`;
export const CARD_WAS_NOT_PRIME = value => `Whoops! ${value} is not prime.`;
export const SELECTED_VALUE = value => `Selected ${value}.`;

export const POINTS_FOR_MATCH = 1;
export const POINTS_FOR_NO_MATCH = 1;
export const NO_MATCH_TIMEOUT = 1000;

// utils/cards.js
export const getRandomIndex = array =>
  array[Math.floor(Math.random() * array.length)];

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

export const packs = {
  [DifficultyLevels.EASY]: [
    [
      { type: "prime", value: 7 },
      { type: "prime", value: 5 },
      { value: 29, type: "prime" },
      { value: 17, type: "prime" },
      { value: 11, type: "prime" },
      { value: 12, type: "expression", expression: "2 × 6" },
      { type: "value", value: 12 },
      { expression: "3 × 2", value: 6, type: "expression" },
      { type: "value", value: 6 },
      { value: 24, type: "expression", expression: "4 × 6" },
      { value: 24, type: "value" },
      { value: 10, expression: "5 × 2", type: "expression" },
      { value: 10, type: "value" },
      { expression: "2 × 5", value: 10, type: "expression" },
      { value: 10, type: "value" },
      { value: 15, type: "expression", expression: "3 × 5" },
      { type: "value", value: 15 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { value: 24, type: "value" },
      { value: 18, type: "expression", expression: "3 × 6" },
      { type: "value", value: 18 },
      { type: "expression", value: 25, expression: "5 × 5" },
      { value: 25, type: "value" },
      { value: 15, expression: "3 × 5", type: "expression" },
      { value: 15, type: "value" }
    ],
    [
      { value: 19, type: "prime" },
      { value: 7, type: "prime" },
      { type: "prime", value: 23 },
      { value: 29, type: "prime" },
      { value: 11, type: "prime" },
      { value: 8, expression: "4 × 2", type: "expression" },
      { type: "value", value: 8 },
      { type: "expression", value: 12, expression: "6 × 2" },
      { value: 12, type: "value" },
      { value: 24, expression: "6 × 4", type: "expression" },
      { type: "value", value: 24 },
      { value: 18, expression: "6 × 3", type: "expression" },
      { type: "value", value: 18 },
      { value: 9, type: "expression", expression: "3 × 3" },
      { value: 9, type: "value" },
      { type: "expression", value: 6, expression: "3 × 2" },
      { type: "value", value: 6 },
      { type: "expression", value: 18, expression: "3 × 6" },
      { type: "value", value: 18 },
      { type: "expression", value: 20, expression: "4 × 5" },
      { type: "value", value: 20 },
      { value: 20, expression: "4 × 5", type: "expression" },
      { value: 20, type: "value" },
      { value: 6, type: "expression", expression: "2 × 3" },
      { type: "value", value: 6 }
    ],
    [
      { type: "prime", value: 13 },
      { type: "prime", value: 7 },
      { type: "prime", value: 11 },
      { type: "prime", value: 19 },
      { value: 11, type: "prime" },
      { value: 18, expression: "3 × 6", type: "expression" },
      { type: "value", value: 18 },
      { value: 20, type: "expression", expression: "5 × 4" },
      { value: 20, type: "value" },
      { type: "expression", value: 4, expression: "2 × 2" },
      { value: 4, type: "value" },
      { value: 12, expression: "3 × 4", type: "expression" },
      { type: "value", value: 12 },
      { type: "expression", value: 36, expression: "6 × 6" },
      { type: "value", value: 36 },
      { value: 36, type: "expression", expression: "6 × 6" },
      { type: "value", value: 36 },
      { value: 16, type: "expression", expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 20, expression: "4 × 5", type: "expression" },
      { type: "value", value: 20 },
      { expression: "2 × 5", value: 10, type: "expression" },
      { value: 10, type: "value" },
      { value: 20, type: "expression", expression: "4 × 5" },
      { value: 20, type: "value" }
    ],
    [
      { type: "prime", value: 19 },
      { value: 17, type: "prime" },
      { value: 29, type: "prime" },
      { type: "prime", value: 13 },
      { type: "prime", value: 7 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { type: "value", value: 24 },
      { value: 10, type: "expression", expression: "2 × 5" },
      { type: "value", value: 10 },
      { value: 30, type: "expression", expression: "5 × 6" },
      { type: "value", value: 30 },
      { expression: "2 × 3", value: 6, type: "expression" },
      { value: 6, type: "value" },
      { value: 12, expression: "4 × 3", type: "expression" },
      { value: 12, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { type: "value", value: 30 },
      { value: 16, type: "expression", expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 12, expression: "2 × 6", type: "expression" },
      { type: "value", value: 12 },
      { type: "expression", value: 12, expression: "6 × 2" },
      { type: "value", value: 12 },
      { expression: "4 × 2", value: 8, type: "expression" },
      { value: 8, type: "value" }
    ],
    [
      { value: 5, type: "prime" },
      { value: 17, type: "prime" },
      { type: "prime", value: 23 },
      { value: 11, type: "prime" },
      { value: 7, type: "prime" },
      { value: 10, type: "expression", expression: "5 × 2" },
      { type: "value", value: 10 },
      { expression: "2 × 6", value: 12, type: "expression" },
      { value: 12, type: "value" },
      { expression: "2 × 5", value: 10, type: "expression" },
      { type: "value", value: 10 },
      { value: 24, expression: "6 × 4", type: "expression" },
      { value: 24, type: "value" },
      { type: "expression", value: 12, expression: "2 × 6" },
      { value: 12, type: "value" },
      { type: "expression", value: 36, expression: "6 × 6" },
      { value: 36, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { value: 30, type: "value" },
      { expression: "6 × 5", value: 30, type: "expression" },
      { type: "value", value: 30 },
      { value: 4, expression: "2 × 2", type: "expression" },
      { type: "value", value: 4 },
      { value: 15, expression: "5 × 3", type: "expression" },
      { value: 15, type: "value" }
    ]
  ],
  [DifficultyLevels.MEDIUM]: [
    [
      { type: "prime", value: 29 },
      { value: 41, type: "prime" },
      { type: "prime", value: 43 },
      { type: "prime", value: 37 },
      { type: "prime", value: 23 },
      { expression: "5 × 4", value: 20, type: "expression" },
      { value: 20, type: "value" },
      { type: "expression", value: 16, expression: "4 × 4" },
      { type: "value", value: 16 },
      { value: 48, expression: "8 × 6", type: "expression" },
      { type: "value", value: 48 },
      { value: 28, type: "expression", expression: "7 × 4" },
      { type: "value", value: 28 },
      { type: "expression", value: 28, expression: "7 × 4" },
      { type: "value", value: 28 },
      { type: "expression", value: 24, expression: "6 × 4" },
      { type: "value", value: 24 },
      { value: 35, type: "expression", expression: "5 × 7" },
      { value: 35, type: "value" },
      { value: 40, expression: "5 × 8", type: "expression" },
      { type: "value", value: 40 },
      { expression: "8 × 6", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { value: 20, type: "expression", expression: "4 × 5" },
      { value: 20, type: "value" }
    ],
    [
      { type: "prime", value: 37 },
      { value: 23, type: "prime" },
      { value: 41, type: "prime" },
      { value: 43, type: "prime" },
      { value: 29, type: "prime" },
      { value: 30, type: "expression", expression: "5 × 6" },
      { type: "value", value: 30 },
      { expression: "6 × 7", value: 42, type: "expression" },
      { value: 42, type: "value" },
      { expression: "8 × 6", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { value: 30, expression: "5 × 6", type: "expression" },
      { value: 30, type: "value" },
      { value: 35, expression: "7 × 5", type: "expression" },
      { type: "value", value: 35 },
      { expression: "7 × 4", value: 28, type: "expression" },
      { type: "value", value: 28 },
      { value: 20, type: "expression", expression: "5 × 4" },
      { value: 20, type: "value" },
      { expression: "8 × 5", value: 40, type: "expression" },
      { type: "value", value: 40 },
      { value: 42, expression: "7 × 6", type: "expression" },
      { value: 42, type: "value" },
      { type: "expression", value: 30, expression: "6 × 5" },
      { type: "value", value: 30 }
    ],
    [
      { type: "prime", value: 37 },
      { type: "prime", value: 29 },
      { type: "prime", value: 43 },
      { value: 47, type: "prime" },
      { value: 41, type: "prime" },
      { value: 64, expression: "8 × 8", type: "expression" },
      { value: 64, type: "value" },
      { expression: "7 × 6", value: 42, type: "expression" },
      { type: "value", value: 42 },
      { expression: "5 × 8", value: 40, type: "expression" },
      { value: 40, type: "value" },
      { expression: "4 × 5", value: 20, type: "expression" },
      { value: 20, type: "value" },
      { value: 30, type: "expression", expression: "5 × 6" },
      { value: 30, type: "value" },
      { expression: "8 × 4", value: 32, type: "expression" },
      { value: 32, type: "value" },
      { type: "expression", value: 64, expression: "8 × 8" },
      { value: 64, type: "value" },
      { expression: "6 × 8", value: 48, type: "expression" },
      { value: 48, type: "value" },
      { type: "expression", value: 36, expression: "6 × 6" },
      { value: 36, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { value: 40, type: "value" }
    ],
    [
      { type: "prime", value: 47 },
      { type: "prime", value: 41 },
      { type: "prime", value: 31 },
      { type: "prime", value: 43 },
      { type: "prime", value: 37 },
      { expression: "8 × 6", value: 48, type: "expression" },
      { type: "value", value: 48 },
      { type: "expression", value: 32, expression: "4 × 8" },
      { value: 32, type: "value" },
      { value: 40, type: "expression", expression: "8 × 5" },
      { type: "value", value: 40 },
      { expression: "8 × 7", value: 56, type: "expression" },
      { value: 56, type: "value" },
      { value: 24, type: "expression", expression: "6 × 4" },
      { value: 24, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { value: 40, type: "value" },
      { value: 40, expression: "8 × 5", type: "expression" },
      { type: "value", value: 40 },
      { value: 56, type: "expression", expression: "7 × 8" },
      { value: 56, type: "value" },
      { value: 24, expression: "4 × 6", type: "expression" },
      { type: "value", value: 24 },
      { value: 32, expression: "8 × 4", type: "expression" },
      { type: "value", value: 32 }
    ],
    [
      { type: "prime", value: 41 },
      { type: "prime", value: 23 },
      { type: "prime", value: 29 },
      { type: "prime", value: 43 },
      { value: 31, type: "prime" },
      { value: 48, type: "expression", expression: "6 × 8" },
      { value: 48, type: "value" },
      { expression: "5 × 4", value: 20, type: "expression" },
      { type: "value", value: 20 },
      { value: 36, expression: "6 × 6", type: "expression" },
      { value: 36, type: "value" },
      { expression: "5 × 7", value: 35, type: "expression" },
      { type: "value", value: 35 },
      { expression: "7 × 8", value: 56, type: "expression" },
      { value: 56, type: "value" },
      { expression: "7 × 6", value: 42, type: "expression" },
      { value: 42, type: "value" },
      { value: 56, type: "expression", expression: "7 × 8" },
      { value: 56, type: "value" },
      { value: 48, expression: "6 × 8", type: "expression" },
      { type: "value", value: 48 },
      { expression: "6 × 7", value: 42, type: "expression" },
      { type: "value", value: 42 },
      { value: 30, expression: "6 × 5", type: "expression" },
      { value: 30, type: "value" }
    ]
  ],
  [DifficultyLevels.HARD]: [
    [
      { value: 61, type: "prime" },
      { value: 79, type: "prime" },
      { value: 59, type: "prime" },
      { value: 89, type: "prime" },
      { type: "prime", value: 67 },
      { type: "expression", value: 72, expression: "6 × 12" },
      { value: 72, type: "value" },
      { expression: "9 × 12", value: 108, type: "expression" },
      { value: 108, type: "value" },
      { value: 72, type: "expression", expression: "12 × 6" },
      { type: "value", value: 72 },
      { value: 80, type: "expression", expression: "8 × 10" },
      { type: "value", value: 80 },
      { type: "expression", value: 49, expression: "7 × 7" },
      { value: 49, type: "value" },
      { type: "expression", value: 99, expression: "11 × 9" },
      { value: 99, type: "value" },
      { value: 120, expression: "10 × 12", type: "expression" },
      { value: 120, type: "value" },
      { expression: "9 × 9", value: 81, type: "expression" },
      { type: "value", value: 81 },
      { value: 66, type: "expression", expression: "11 × 6" },
      { type: "value", value: 66 },
      { expression: "12 × 11", value: 132, type: "expression" },
      { type: "value", value: 132 }
    ],
    [
      { type: "prime", value: 71 },
      { type: "prime", value: 61 },
      { type: "prime", value: 79 },
      { type: "prime", value: 47 },
      { type: "prime", value: 83 },
      { expression: "8 × 8", value: 64, type: "expression" },
      { value: 64, type: "value" },
      { value: 90, type: "expression", expression: "9 × 10" },
      { type: "value", value: 90 },
      { value: 88, type: "expression", expression: "8 × 11" },
      { type: "value", value: 88 },
      { expression: "7 × 12", value: 84, type: "expression" },
      { value: 84, type: "value" },
      { expression: "6 × 10", value: 60, type: "expression" },
      { value: 60, type: "value" },
      { type: "expression", value: 54, expression: "6 × 9" },
      { value: 54, type: "value" },
      { expression: "12 × 11", value: 132, type: "expression" },
      { type: "value", value: 132 },
      { type: "expression", value: 88, expression: "8 × 11" },
      { value: 88, type: "value" },
      { value: 81, expression: "9 × 9", type: "expression" },
      { value: 81, type: "value" },
      { type: "expression", value: 48, expression: "6 × 8" },
      { type: "value", value: 48 }
    ],
    [
      { type: "prime", value: 79 },
      { type: "prime", value: 71 },
      { value: 73, type: "prime" },
      { type: "prime", value: 59 },
      { value: 97, type: "prime" },
      { value: 88, expression: "8 × 11", type: "expression" },
      { type: "value", value: 88 },
      { value: 72, expression: "6 × 12", type: "expression" },
      { value: 72, type: "value" },
      { expression: "11 × 12", value: 132, type: "expression" },
      { value: 132, type: "value" },
      { value: 144, type: "expression", expression: "12 × 12" },
      { type: "value", value: 144 },
      { type: "expression", value: 48, expression: "6 × 8" },
      { type: "value", value: 48 },
      { value: 120, expression: "12 × 10", type: "expression" },
      { type: "value", value: 120 },
      { expression: "6 × 10", value: 60, type: "expression" },
      { type: "value", value: 60 },
      { value: 48, expression: "8 × 6", type: "expression" },
      { type: "value", value: 48 },
      { type: "expression", value: 60, expression: "10 × 6" },
      { value: 60, type: "value" },
      { value: 42, expression: "6 × 7", type: "expression" },
      { value: 42, type: "value" }
    ],
    [
      { value: 59, type: "prime" },
      { value: 67, type: "prime" },
      { type: "prime", value: 61 },
      { type: "prime", value: 71 },
      { value: 73, type: "prime" },
      { value: 81, expression: "9 × 9", type: "expression" },
      { type: "value", value: 81 },
      { expression: "10 × 11", value: 110, type: "expression" },
      { value: 110, type: "value" },
      { expression: "12 × 6", value: 72, type: "expression" },
      { type: "value", value: 72 },
      { value: 132, type: "expression", expression: "11 × 12" },
      { value: 132, type: "value" },
      { expression: "9 × 9", value: 81, type: "expression" },
      { type: "value", value: 81 },
      { value: 60, type: "expression", expression: "6 × 10" },
      { value: 60, type: "value" },
      { value: 64, type: "expression", expression: "8 × 8" },
      { value: 64, type: "value" },
      { expression: "6 × 11", value: 66, type: "expression" },
      { value: 66, type: "value" },
      { expression: "8 × 12", value: 96, type: "expression" },
      { type: "value", value: 96 },
      { expression: "7 × 6", value: 42, type: "expression" },
      { value: 42, type: "value" }
    ],
    [
      { value: 47, type: "prime" },
      { value: 79, type: "prime" },
      { value: 67, type: "prime" },
      { type: "prime", value: 59 },
      { value: 89, type: "prime" },
      { value: 42, expression: "7 × 6", type: "expression" },
      { value: 42, type: "value" },
      { type: "expression", value: 66, expression: "6 × 11" },
      { type: "value", value: 66 },
      { value: 60, type: "expression", expression: "10 × 6" },
      { value: 60, type: "value" },
      { value: 77, expression: "11 × 7", type: "expression" },
      { type: "value", value: 77 },
      { value: 66, type: "expression", expression: "6 × 11" },
      { type: "value", value: 66 },
      { value: 84, type: "expression", expression: "12 × 7" },
      { type: "value", value: 84 },
      { type: "expression", value: 81, expression: "9 × 9" },
      { type: "value", value: 81 },
      { expression: "10 × 7", value: 70, type: "expression" },
      { value: 70, type: "value" },
      { expression: "6 × 9", value: 54, type: "expression" },
      { type: "value", value: 54 },
      { value: 84, type: "expression", expression: "12 × 7" },
      { value: 84, type: "value" }
    ]
  ]
};

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

export const cloneGrid = grid =>
  grid.map(row => row.map(card => Object.assign({}, card)));

export const convertGridToPack = grid =>
  grid.reduce((prev, next) => prev.concat(next), []);

export const isGridComplete = grid =>
  convertGridToPack(grid).every(card => card.done);

export default class Game extends React.Component {
  state = {
    difficulty: DifficultyLevels.EASY,
    grid: null,
    points: 0,
    message: "",
    chosenCard: null,
    showingHowToPlay: false
  };

  componentDidMount() {
    this.initialize(INITIALIZED_MESSAGE);
  }

  componentDidUpdate() {
    const { grid, points } = this.state;

    if (grid) {
      this.checkIfFinished();
    }
  }

  initialize = (message = "") =>
    this.setState({
      grid: initializeGrid(
        initializePack(packs[this.state.difficulty]),
        GridDimensions.ROWS,
        GridDimensions.COLUMNS
      ),
      points: PointTotals[this.state.difficulty],
      message
    });

  startNewGame = () => {
    this.setState({ grid: null });

    setTimeout(() => {
      this.initialize(NEW_GAME_MESSAGE);
    }, NO_MATCH_TIMEOUT);
  };

  showHowToPlay = () => this.setState({ showingHowToPlay: true });

  hideHowToPlay = () => this.setState({ showingHowToPlay: false });

  updateDifficulty = difficulty => e => {
    this.setState({ difficulty, grid: null });

    setTimeout(() => {
      this.initialize(NEW_GAME_MESSAGE);
    }, NO_MATCH_TIMEOUT);
  };

  updatePoints = points => this.setState({ points });

  updateMessage = message => this.setState({ message });

  clearChosenCard = () => this.setState({ chosenCard: null });

  showMatchMessage = (a, b) => this.updateMessage(MATCH_MESSAGE(b, a));

  showNoMatchMessage = (a, b) => this.updateMessage(NO_MATCH_MESSAGE(b, a));

  getClonedGrid = () => cloneGrid(this.state.grid);

  setCardToDone = (row, column) => {
    const grid = this.getClonedGrid();

    grid[row][column].done = true;

    this.setState({
      grid
    });
  };

  toggleCardVisibility = (row, column) => {
    const grid = this.getClonedGrid();

    grid[row][column].visible = !grid[row][column].visible;

    this.setState({ grid });
  };

  hideAllCards = () => {
    const grid = hideGridCards(this.getClonedGrid());

    this.setState({ grid });
  };

  chooseCard = (row, column) => e => {
    const { grid, chosenCard } = this.state;
    const card = grid[row][column];
    const [chosenRow, chosenColumn] = chosenCard || [];
    const alreadySelected = row === chosenRow && column === chosenColumn;

    if (card.done) return;

    if (alreadySelected) {
      return this.updateMessage(CANNOT_SELECT_AGAIN);
    }

    this.toggleCardVisibility(row, column);

    if (!chosenCard) {
      this.updateMessage(SELECTED_VALUE(card.expression || card.value));
      return this.setState({ chosenCard: [row, column] });
    }

    this.compare(row, column);
  };

  compare = (row, column) => {
    const { grid, points, chosenCard } = this.state;
    const [toCompareRow, toCompareColumn] = chosenCard;
    const card = grid[row][column];
    const toCompare = grid[toCompareRow][toCompareColumn];

    if (card.value === toCompare.value) {
      this.showMatchMessage(card.value, toCompare.value);
      this.updatePoints(points + POINTS_FOR_MATCH);
      this.setCardToDone(row, column);
      setTimeout(() => this.setCardToDone(toCompareRow, toCompareColumn), 0);
    } else {
      this.showNoMatchMessage(card.value, toCompare.value);
      this.updatePoints(points - POINTS_FOR_NO_MATCH);
      setTimeout(() => {
        const { grid } = this.state;

        if (grid) {
          this.toggleCardVisibility(row, column);
          this.toggleCardVisibility(toCompareRow, toCompareColumn);
        }
      }, NO_MATCH_TIMEOUT);
    }

    this.clearChosenCard();
  };

  checkIfFinished = () => {
    const { grid, points } = this.state;

    if (points <= 0) {
      this.updateMessage(GAME_OVER_MESSAGE);
      this.setState({ grid: null });
    }

    if (isGridComplete(grid)) {
      this.updateMessage(GAME_WON_MESSAGE(points));
      this.setState({ grid: null });
    }
  };

  claimPrime = () => {
    const { chosenCard, grid, points } = this.state;

    if (!chosenCard) return;

    const [row, column] = chosenCard;
    const { type, value } = grid[row][column];

    if (type === CardTypes.PRIME) {
      this.updateMessage(CARD_WAS_PRIME(value));
      this.updatePoints(points + POINTS_FOR_MATCH);
      this.setCardToDone(row, column);
    } else {
      this.updateMessage(CARD_WAS_NOT_PRIME(value));
      this.updatePoints(points - POINTS_FOR_NO_MATCH);
      this.toggleCardVisibility(row, column);
    }

    this.clearChosenCard();
  };

  render() {
    const { difficulty, grid, points, message, chosenCard } = this.state;
    const newGameButton = (
      <button className="Game-button" onClick={this.startNewGame}>
        {NEW_GAME}
      </button>
    );

    return (
      <section className="Game">
        <section className="Game-header">
          <nav className="Game-options">
            <section className="Game-difficulty">
              <button
                className="Game-difficulty-option"
                onClick={this.updateDifficulty(DifficultyLevels.EASY)}
                disabled={difficulty === DifficultyLevels.EASY}
              >
                {DifficultyLevels.EASY}
              </button>
              <button
                className="Game-difficulty-option"
                onClick={this.updateDifficulty(DifficultyLevels.MEDIUM)}
                disabled={difficulty === DifficultyLevels.MEDIUM}
              >
                {DifficultyLevels.MEDIUM}
              </button>
              <button
                className="Game-difficulty-option"
                onClick={this.updateDifficulty(DifficultyLevels.HARD)}
                disabled={difficulty === DifficultyLevels.HARD}
              >
                {DifficultyLevels.HARD}
              </button>
            </section>
          </nav>
          <h1 className="Game-title">{GAME_TITLE}</h1>
          <section className="Game-options-buttons">
            {newGameButton}
            <button className="Game-button" onClick={this.showHowToPlay}>
              {HOW_TO_PLAY}
            </button>
          </section>
          <section className="Game-subheader">
            <section className="Game-points">{points}</section>
            <p className="Game-message">{message}</p>
          </section>
        </section>
        <section className="Game-grid-wrapper">
          <section className="Game-grid">
            {grid ? (
              grid.map((row, rowIndex) => (
                <section key={rowIndex} className="Game-grid-row">
                  {row.map((card, columnIndex) => (
                    <section key={columnIndex} className="Game-grid-column">
                      <Card
                        {...card}
                        onClick={this.chooseCard(rowIndex, columnIndex)}
                      />
                    </section>
                  ))}
                </section>
              ))
            ) : (
              <section className="Game-empty">
                {GAME_EMPTY_MESSAGE}
                {newGameButton}
              </section>
            )}
          </section>
          {grid && (
            <button
              onClick={this.claimPrime}
              className="Game-grid-prime"
              disabled={!chosenCard}
            >
              {PRIME_BUTTON_TEXT}
            </button>
          )}
        </section>
      </section>
    );
  }
}
