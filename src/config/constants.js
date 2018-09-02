export const GAME_TITLE = "Marvelous memory maths";
export const INITIALIZED_MESSAGE = "Select a card to begin.";
export const NEW_GAME = "New game";
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
