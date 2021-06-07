/*
joinOr() PEDAC
PROBLEM
  input: array of numbers
  output: string
  rules:
    EXPLICIT
    - write a function named joinOR()
    - it takes an array as an argument

    IMPLICIT
    - can take two additional optional arguments
    - option arg 2: let's you pass a different seperator (see examples)
      - default ', '
    - option arg 3: let's you pass a different word instead of 'or'
      - default 'or'
    - does NOT print the seperator or the word if there is 1 or less numbers
    - does NOT print the seperator if there are only two numbers
    - prints an empty string if the array is empty

EXAMPLES
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

DATA STRUCTURE
Array

ALGORITHM
- create function joinOr() w args
  - take array as arg
  - string as arg 2, default arg 2 is ', '
  - string as arg 3, default is 'or'
- create numSequence as empty string
- test for length of array
  length <= 1
    - add array[0] to numSequence
  length === 2
    - add array[0], the seperator, and array[1]
  length >= 3
    - add the following to numSequence...
      - all array indexes
      - the seperator between each
      - the word between the last two numbers to print
- return numSequence string

CODE
*/

const READLINE = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const MATCH_WINNING_SCORE = 5;
const CENTER_SQUARE = 5;
const COMP_THINK_TIME = 1500;

function joinOr(arr, sep = ', ', word = 'or') {
  let numSequence = '';

  if (arr.length === 1) {
    numSequence += arr[0];
  } else if (arr.length === 2) {
    numSequence += `${arr[0]} ${word} ${arr[1]}`;
  } else if (arr.length >= 3) {
    for (let index = 0; index < arr.length; index += 1) {
      if (index === arr.length - 1) {
        numSequence += `${word} ${arr[index]}`;
      } else {
        numSequence += `${arr[index]}${sep}`;
      }
    }
  }
  return numSequence;
}

function prompt(message) {
  console.log(`<> ${message}`);
}

function displayBoard(board) {
  console.log(`You are '${HUMAN_MARKER}', the Computer is '${COMPUTER_MARKER}'.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}): `);
    square = READLINE.question().trim();

    if (emptySquares(board).includes(square)) break;

    displayBoard(board);
    prompt('Sorry, that is not a valid choice.');
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square = offenseOrDefense(board, COMPUTER_MARKER);

  if (!square) {
    square = offenseOrDefense(board, HUMAN_MARKER);
  }

  if (!square) {
    if (board[CENTER_SQUARE] === INITIAL_MARKER) square = CENTER_SQUARE;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function offenseOrDefense(board, markerType) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findWinningSquare(line, board, markerType);
    if (square) break;
  }

  return square;
}

function findWinningSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(value => value === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function theRoundWinnerIs(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return false; //Tie game.
}

function theMatchWinnerIs(playerScore, computerScore) {
  if (playerScore === MATCH_WINNING_SCORE) {
    return 'player';
  } else if (computerScore === MATCH_WINNING_SCORE) {
    return 'computer';
  } else {
    return false;
  }
}

function getCurrentPlayer() {
  let firstMover;
  while (true) {
    prompt(`Who should move first? (Enter 'p' for player or 'c' for computer)`);
    firstMover = READLINE.question().toLowerCase();

    if (firstMover !== 'p' && firstMover !== 'c') {
      console.clear();
      prompt('That is not a valid choice.');
    } else {
      break;
    }
  }

  if (firstMover === 'p') {
    return 'player';
  } else {
    return 'computer';
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else {
    return 'player';
  }
}

function computerThinking(ms) {
  console.log('Computer thinking...');
  let waitTill = new Date(new Date().getTime() + ms);
  while (waitTill > new Date()) {
    continue;
  }
}

/* ********** Begin Main Program ********** */

console.log(`\nWelcome to You vs Computer in Tic Tac Toe!`);
console.log(`___________________________________________\n`);
while (true) {
  let playerScore = 0;
  let computerScore = 0;

  console.log(`\nThe first to win ${MATCH_WINNING_SCORE} rounds, wins the match.`);

  let currentPlayer = getCurrentPlayer();
  console.clear();

  while (true) {
    let board = initializeBoard();
    let firstPlayer = currentPlayer;

    while (true) {
      if (currentPlayer === 'player') displayBoard(board);
      if (currentPlayer === 'computer') {
        console.clear();
        computerThinking(COMP_THINK_TIME);
        console.clear();
      }

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (theRoundWinnerIs(board) || boardFull(board)) break;
    }

    console.clear();
    displayBoard(board);

    let roundWinner = theRoundWinnerIs(board);

    if (roundWinner === 'Player') {
      playerScore += 1;
      if (theMatchWinnerIs(playerScore, computerScore)) break;
      prompt(`The player won!`);
    } else if (roundWinner === 'Computer') {
      computerScore += 1;
      if (theMatchWinnerIs(playerScore, computerScore)) break;
      prompt(`The computer won.`);
    } else {
      prompt("It's a tie.");
    }

    console.log(`  The current score is`);
    console.log(` Player: ${playerScore}  Computer: ${computerScore}\n`);

    currentPlayer = alternatePlayer(firstPlayer);
    console.log(`The next round will be the ${currentPlayer}'s turn to choose first.`);
    console.log(`Press 'enter' to continue`);
    READLINE.question();
    console.clear();
  }

  console.log(`\n<><><><><><><><><><><><><><><>`);
  console.log(`Game, set, match!
  The ${theMatchWinnerIs(playerScore, computerScore)} won the whole thing!`);

  let response;
  while (true) {
    prompt('\nWould you like to play another match? (y or n)');
    response = READLINE.question().toLowerCase();

    if (response !== 'y' && response !== 'n') {
      console.clear();
      prompt('That is not a valid choice.');
    } else {
      break;
    }
  }

  if (response !== 'y') break;
  console.clear();
}

prompt('Thanks for playing Tic Tac Toe!\n');