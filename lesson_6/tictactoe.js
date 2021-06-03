const READLINE = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
];


function prompt(message) {
  console.log(`<> ${message}`);
}

function displayBoard(board) {
  console.clear();

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
    prompt(`Choose a square (${emptySquares(board).join(', ')}): `);
    square = READLINE.question().trim();

    if (emptySquares(board).includes(square)) break;
    
    prompt('Sorry, that is not a valid choice.');
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function emptySquares(board) {
 return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
  }
}

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardFull(board)) break;
}

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`);
} else {
  prompt("It's a tie.");
}