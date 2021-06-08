/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
    - repeat until bust or stay
4. If player bust, dealer wins
5. Dealer turn: hit or stay
    - reapeat until score >= 17
6. If dealer busts, player wins
7. Compare cards and declare winner
*/
const readline = require('readline-sync');
const DECK_TEMPLATE = require('./cardDeckTemplate.json');
const SUITS = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
const DEALER_STAYS = 17;
const POINTS_THRESHOLD = 21;
const PAUSE_TIME = 1500;
/*
let testHand = [
  { card: '10', value: 10, suit: 'Spades' },
  { card: 'King', value: 10, suit: 'Spades' },
  { card: 'Ace', value: 11, suit: 'Clubs' },
  { card: '2', value: 2, suit: 'Diamonds' },
  { card: '3', value: 3, suit: 'Clubs' },
  { card: 'Ace', value: 11, suit: 'Clubs' }
];*/


function BaseDeck() {
  let baseDeck = [];

  SUITS.forEach(suit => {
    DECK_TEMPLATE.forEach(card => {
      let newCard = Object.assign({}, card);
      newCard['suit'] = suit;
      baseDeck.push(newCard);
    });
  });

  return baseDeck;
}

function shuffle(baseDeck) {
  for (let index = baseDeck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [baseDeck[index], baseDeck[otherIndex]] =
    [baseDeck[otherIndex], baseDeck[index]];
  }
  return baseDeck;
}

function busted(participant) {
  return pointsInHand(participant) > POINTS_THRESHOLD;
}

function pointsInHand(cards) {
  return cards.reduce((points, card) => {
    return points + card['value'];
  }, 0);
}

function dealCard(cardDeck, participant) {
  participant.push(cardDeck.pop());
}

function initialDeal(cardDeck, player, dealer) {
  for (let cardsDealt = 0; cardsDealt < 2; cardsDealt++) {
    dealCard(cardDeck, player);
  }

  for (let cardsDealt = 0; cardsDealt < 2; cardsDealt++) {
    dealCard(cardDeck, dealer);
  }
}

function displayCurrentHand(player, dealer) {
  console.log(`Dealer is showing: ${dealer[0]['card']} and unknown card`);
  console.log(`You have a ${allCards(player)}`);
}

function allCards(cardsInHand) {
  if (cardsInHand.length === 2) {
    return `${cardsInHand[0]['card']} and a ${cardsInHand[1]['card']}`;
  } else {
    return cardsInHand.slice(0, -1).map(cardObj => {
      return cardObj['card'];
    }).join(', ') + ' and a ' + cardsInHand[cardsInHand.length - 1]['card'];
  }
}

function dealersTurn(cardDeck, dealer) {
  while (pointsInHand(dealer) < DEALER_STAYS) {
    dealCard(cardDeck, dealer);
    determineAceValue(dealer);
  }
  pause('Dealer playing...');
}

function displayFinalHands(player, dealer) {
  console.log(`Dealer has a ${allCards(dealer)}`);
  console.log(` for a total of ${pointsInHand(dealer)}`);
  console.log(`\nYou have a ${allCards(player)}`);
  console.log(` for a total of ${pointsInHand(player)}`);
}

function determineAceValue(participant) {
  while (busted(participant)) {
    let ace = participant.find(cardObj => {
      return (cardObj['card'] === 'Ace' && cardObj['value'] === 11);
    });
    if (!ace) break;
    else {
      ace['value'] = 1;
    }
  }
}

function hitOrStay() {
  let answer;
  while (true) {
    console.log("Hit or Stay (enter 'h' or 's')?");
    answer = readline.question().toLowerCase();
    if (answer === 'h' || answer === 's') break;
    else {
      console.clear();
      console.log(`That is not a valid choice.`);
    }
  }
  return answer;
}

function askToPlayAgain() {
  let answer;
  while (true) {
    console.log("\nWould you like to play again? (enter 'y' or 'n')");
    answer = readline.question().toLowerCase();
    if (answer === 'y' || answer === 'n') break;
    else {
      console.clear();
      console.log(`That is not a valid choice.`);
    }
  }
  return answer;
}

function pause(message, ms = PAUSE_TIME) {
  console.log(message);
  let waitTill = new Date(new Date().getTime() + ms);
  while (waitTill > new Date()) {
    continue;
  }
}

/*********** Main Program ************/
while (true) {
  let shuffledDeck = shuffle(BaseDeck());
  let playerHand = [];
  let dealerHand = [];

  pause('Dealing cards...');
  initialDeal(shuffledDeck, playerHand, dealerHand);

  while (!busted(playerHand)) {
    displayCurrentHand(playerHand, dealerHand);

    let answer = hitOrStay();
    if (answer === 's') break;

    dealCard(shuffledDeck, playerHand);
    determineAceValue(playerHand);
    pause('Dealing card...', (PAUSE_TIME / 2));
  }

  if (busted(playerHand)) {
    console.log(`You have a ${allCards(playerHand)}`);
    console.log('You busted... better luck next time\n');
  } else {
    console.log("You chose to stay!");

    dealersTurn(shuffledDeck, dealerHand);

    displayFinalHands(playerHand, dealerHand);
  }

  let answer = askToPlayAgain();
  if (answer === 'n') break;
  console.clear();
}
