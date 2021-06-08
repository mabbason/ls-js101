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
  // player or dealer score > 21
}

function dealCards(playerHand, dealerHand, cardDeck) {
  playerHand.push(cardDeck.pop());
  dealerHand.push(cardDeck.pop());
}

/*********** Main Program ************/
while (true) {
  let shuffledDeck = shuffle(BaseDeck());
  let playerHand = [];
  let dealerHand = [];

  console.log(shuffledDeck);

  dealCards(playerHand, dealerHand, shuffledDeck);

  console.log(shuffledDeck);
  console.log(playerHand);
  console.log(dealerHand);

  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}

if (busted()) {
  //end game
} else {
  console.log("You chose to stay!");
}