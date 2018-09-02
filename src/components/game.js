import React from "react";

import * as config from "../config";
import * as utils from "../utils";
import Card from "./card";
import "./game.css";

export default class Game extends React.Component {
  state = {
    difficulty: config.DifficultyLevels.EASY,
    grid: null,
    points: 0,
    message: "",
    chosenCard: null
  };

  componentDidMount() {
    this.initialize(config.INITIALIZED_MESSAGE);
  }

  componentDidUpdate() {
    const { grid, points } = this.state;

    if (grid) {
      this.checkIfFinished();
    }
  }

  /**
   * @method initialize
   * @desc Create a new grid from a new pack,
   *    reset points, and display a message informing the
   *    user of the new game.
   * @param {string} message
   */
  initialize = (message = "") =>
    this.setState({
      grid: utils.initializeGrid(
        utils.initializePack(utils.packs[this.state.difficulty]),
        config.GridDimensions.ROWS,
        config.GridDimensions.COLUMNS
      ),
      points: config.PointTotals[this.state.difficulty],
      message
    });

  /**
   * @method startNewGame
   * @desc Clear the grid and re-initialize it.
   */
  startNewGame = () => {
    this.setState({ grid: null });

    setTimeout(() => {
      this.initialize(config.NEW_GAME_MESSAGE);
    }, config.NO_MATCH_TIMEOUT);
  };

  /**
   * @method updateDifficulty
   * @desc Change the difficulty, then start a new game.
   * @param {string} difficulty
   */
  updateDifficulty = difficulty => e => {
    this.setState({ difficulty });
    this.startNewGame();
  };

  /**
   * @method updatePoints
   * @desc Change the points total.
   * @param {number} points
   */
  updatePoints = points => this.setState({ points });

  /**
   * @method updateMessage
   * @desc Change the displayed messge.
   * @param {string} message
   */
  updateMessage = message => this.setState({ message });

  /**
   * @method clearChosenCard
   * @desc Get rid of the last chosen card.
   */
  clearChosenCard = () => this.setState({ chosenCard: null });

  /**
   * @method getClonedGrid
   * @desc A getter for a fresh copy of the Grid
   *    that avoids any mutation.
   */
  getClonedGrid = () => utils.cloneGrid(this.state.grid);

  /**
   * @method getClonedGrid
   * @desc A getter for a fresh copy of the Grid
   *    that avoids any mutation.
   */
  setCardToDone = (row, column) => {
    const grid = this.getClonedGrid();

    grid[row][column].done = true;

    this.setState({
      grid
    });
  };

  /**
   * @method toggleCardVisibility
   * @desc Switches the visibility of a card at given coordinates.
   * @param {number} row
   * @param {number} column
   */
  toggleCardVisibility = (row, column) => {
    const grid = this.getClonedGrid();

    grid[row][column].visible = !grid[row][column].visible;

    this.setState({ grid });
  };

  /**
   * @method chooseCard
   * @desc If a card isn't done or active, show it.
   *    If there isn't an active card yet, make it the active card,
   *    otherwise compare it to the active card.
   * @param {number} row
   * @param {number} column
   */
  chooseCard = (row, column) => e => {
    const { grid, chosenCard } = this.state;
    const card = grid[row][column];
    const [chosenRow, chosenColumn] = chosenCard || [];
    const alreadySelected = row === chosenRow && column === chosenColumn;

    if (card.done) return;

    if (alreadySelected) {
      return this.updateMessage(config.CANNOT_SELECT_AGAIN);
    }

    this.toggleCardVisibility(row, column);

    if (!chosenCard) {
      this.updateMessage(config.SELECTED_VALUE(card.expression || card.value));
      return this.setState({ chosenCard: [row, column] });
    }

    this.compare(row, column);
  };

  /**
   * @method compare
   * @desc Checks if two cards have the same value,
   *    and updates the message and points accordingly.
   * @param {number} row
   * @param {number} column
   */
  compare = (row, column) => {
    const { grid, points, chosenCard } = this.state;
    const [toCompareRow, toCompareColumn] = chosenCard;
    const card = grid[row][column];
    const toCompare = grid[toCompareRow][toCompareColumn];

    if (card.value === toCompare.value) {
      this.updateMessage(config.MATCH_MESSAGE(card.value, toCompare.value));
      this.updatePoints(points + config.POINTS_FOR_MATCH);
      this.setCardToDone(row, column);
      setTimeout(() => this.setCardToDone(toCompareRow, toCompareColumn), 0);
    } else {
      this.updateMessage(config.NO_MATCH_MESSAGE(card.value, toCompare.value));
      this.updatePoints(points - config.POINTS_FOR_NO_MATCH);
      setTimeout(() => {
        const { grid } = this.state;

        if (grid) {
          this.toggleCardVisibility(row, column);
          this.toggleCardVisibility(toCompareRow, toCompareColumn);
        }
      }, config.NO_MATCH_TIMEOUT);
    }

    this.clearChosenCard();
  };

  /**
   * @method checkIfFinished
   * @desc Ends the game if the user has no points,
   *    or if the grid has been finished.
   * @param {number} row
   * @param {number} column
   */
  checkIfFinished = () => {
    const { grid, points } = this.state;

    if (points <= 0) {
      this.updateMessage(config.GAME_OVER_MESSAGE);
      this.setState({ grid: null });
    }

    if (utils.isGridComplete(grid)) {
      this.updateMessage(GAME_WON_MESSAGE(points));
      this.setState({ grid: null });
    }
  };

  /**
   * @method toggleCardVisibility
   * @desc Checks if the active card is a prime number,
   *    and displays a message and adjusts points accordingly.
   */
  claimPrime = () => {
    const { chosenCard, grid, points } = this.state;

    if (!chosenCard) return;

    const [row, column] = chosenCard;
    const { type, value } = grid[row][column];

    if (type === config.CardTypes.PRIME) {
      this.updateMessage(config.CARD_WAS_PRIME(value));
      this.updatePoints(points + config.POINTS_FOR_MATCH);
      this.setCardToDone(row, column);
    } else {
      this.updateMessage(config.CARD_WAS_NOT_PRIME(value));
      this.updatePoints(points - config.POINTS_FOR_NO_MATCH);
      this.toggleCardVisibility(row, column);
    }

    this.clearChosenCard();
  };

  render() {
    const { difficulty, grid, points, message, chosenCard } = this.state;

    return (
      <section className="Game">
        <section className="Game-header">
          <nav className="Game-options">
            {/* Difficulty selection */}
            <section className="Game-difficulty">
              {Object.values(config.DifficultyLevels).map(difficultyLevel => (
                <button
                  key={difficultyLevel}
                  className="Game-difficulty-option"
                  onClick={this.updateDifficulty(difficultyLevel)}
                  disabled={difficulty === difficultyLevel}
                >
                  {difficultyLevel}
                </button>
              ))}
            </section>
          </nav>
          {/* Title */}
          <h1 className="Game-title">{config.GAME_TITLE}</h1>
          {/* Options */}
          <section className="Game-options-buttons">
            <button className="Game-button" onClick={this.startNewGame}>
              {config.NEW_GAME}
            </button>
          </section>
          {/* Points & message */}
          <section className="Game-subheader">
            <section className="Game-points">{points}</section>
            <p className="Game-message">{message}</p>
          </section>
        </section>
        {/* Grid */}
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
                {config.GAME_EMPTY_MESSAGE}
              </section>
            )}
          </section>
          {grid && (
            <button
              onClick={this.claimPrime}
              className="Game-grid-prime"
              disabled={!chosenCard}
            >
              {config.PRIME_BUTTON_TEXT}
            </button>
          )}
        </section>
      </section>
    );
  }
}
