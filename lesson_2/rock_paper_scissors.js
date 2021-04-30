const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'k'];
const CHOICES_FULL_WORDS = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  k: 'spock'
};
const WINNING_MOVES = {
  rock: ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors : ['paper', 'lizard'],
  lizard : ['paper', 'spock'],
  spock : ['scissors', 'rock']
};

const MATCH_WINNING_SCORE = 5;

let userScore;
let computerScore;


function prompt(message) {
  console.log(`<> ${message}`);
}

function getUserChoice() {
  prompt(`Choose one: rock (r), paper (p), scissors (s), lizard (l), spock (k):`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice. Try again.`);
    choice = readline.question();
  }
  return CHOICES_FULL_WORDS[choice];
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let choice = VALID_CHOICES[randomIndex];
  return CHOICES_FULL_WORDS[choice];
}

function userIsWinner(userPlayer, computerPlayer) {
  return WINNING_MOVES[userPlayer].includes(computerPlayer);
}

function theWinnerIs(user, computer) {
  if (user === computer) {
    return "It's a tie.";
  } else if (userIsWinner(user, computer)) {
    return "You won!";
  } else {
    return "The computer won.";
  }
}

function increaseWinnerScore(winner) {
  if (winner === "You won!") {
    userScore += 1;
  } else if (winner === "The computer won.") {
    computerScore += 1;
  }
}

function matchWinner() {
  if (userScore === 5) {
    return 'you!';
  } else {
    return 'the computer.';
  }
}
console.clear();
prompt(`Welcome to a high stakes game of human vs. computer!!\n
  It's time for ROCK, PAPER, SCISSORS, LIZARD, SPOCK!`);

let answer;
do {
  userScore = 0;
  computerScore = 0;

  console.log(`\nThe match winner is the first to score ${MATCH_WINNING_SCORE} points`);

  do {
    console.log('\n________________________________________\n');
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let pointWinner = theWinnerIs(userChoice, computerChoice);

    console.clear();
    prompt(`You chose ${userChoice}, while the computer chose ${computerChoice}.`);
    console.log(`\n${pointWinner}`);

    increaseWinnerScore(pointWinner);

    prompt(`\nThe current score is...\n  You: ${userScore}  Computer:${computerScore}`);

  } while (userScore < MATCH_WINNING_SCORE &&
          computerScore < MATCH_WINNING_SCORE);

  prompt(`\nAnd the winner of the match is ${matchWinner()}`);

  console.log(`\nDo you want to play again (y/n)?`);
  answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
    prompt(`Please enter 'y' or 'n'.`);
    answer = readline.question().toLowerCase();
  }
  console.clear();
} while (answer === 'y');