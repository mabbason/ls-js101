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
const DEALER_STAYS = 17;
const POINTS_THRESHOLD = 21;
const PAUSE_TIME = 1500;
const MATCH_WINNING_SCORE = 5;
const SUIT_AND_SYMBOL = {
  Hearts: '\u2661',
  Clubs: '\u2667',
  Spades: '\u2664',
  Diamonds: '\u2662'
};


function BaseDeck() {
  let baseDeck = [];

  Object.keys(SUIT_AND_SYMBOL).forEach(suit => {
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
    dealCard(cardDeck, dealer);
  }
}

function displayHand(player, dealer, currentOrFinal = 'current') {
  if (currentOrFinal === 'final') {
    console.log(`Dealer has a ${allCardsInHand(dealer)}`);
    console.log(` for a total of ${pointsInHand(dealer)}`);
  } else {
    console.log(`Dealer is showing: ${SUIT_AND_SYMBOL[dealer[0]['suit']]} ` +
    `${dealer[0]['card']} and an unknown card`);
  }
  debugger;
  console.log(`\nYou have a ${allCardsInHand(player)}`);
  console.log(` for a total of ${pointsInHand(player)}`);
}

function allCardsInHand(cardsInHand) {
  if (cardsInHand.length === 2) {
    return `${getSuit(cardsInHand[0])} ${cardsInHand[0]['card']}` +
    ` and a ${getSuit(cardsInHand[1])} ${cardsInHand[1]['card']}`;
  } else {
    return cardsInHand.slice(0, -1).map(cardObj => {
      return `${getSuit(cardObj)} ${cardObj['card']}`;
    }).join(', ') + ' and a ' +
    `${getSuit(cardsInHand[cardsInHand.length - 1])} ` +
    `${cardsInHand[cardsInHand.length - 1]['card']}`;
  }
}

function getSuit(cardObj) {
  return SUIT_AND_SYMBOL[cardObj['suit']];
}

function dealersTurn(cardDeck, dealer) {
  while (pointsInHand(dealer) < DEALER_STAYS) {
    dealCard(cardDeck, dealer);
    determineAceValue(dealer);
  }
  pauseAndDisplay('\nDealer playing...');
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
    console.log("\nWould you like to Hit or Stay (enter 'h' or 's')?");
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

function pauseAndDisplay(message, ms = PAUSE_TIME) {
  console.log(message);
  let waitTill = new Date(new Date().getTime() + ms);
  while (waitTill > new Date()) {
    continue;
  }
  console.clear();
}

function playerTurn(cardDeck, player, dealer) {
  determineAceValue(player);

  while (!busted(player)) {
    displayHand(player, dealer);

    let answer = hitOrStay();
    if (answer === 's') break;

    dealCard(cardDeck, player);
    pauseAndDisplay('Dealing card...', PAUSE_TIME / 2);

    determineAceValue(player);
  }
}

function displayWinner(player, dealer, matchScore) {
  if (matchWinner(matchScore)) {
    console.log(`\n\nThe ${matchWinner(matchScore)} has won the whole match!`);
  } else {
    console.log(`\n<> The ${handWinner(player, dealer)} won that hand <>`);
    console.log(` The current match score is`);
    console.log(`  Player: ${matchScore.player}  Dealer: ${matchScore.dealer}`);
  }
}

function handWinner(player, dealer) {
  if (busted(player)) {
    return 'dealer';
  } else if (busted(dealer)) {
    return 'player';
  } else if (pointsInHand(player) >= pointsInHand(dealer)) {
    return 'player';
  } else {
    return 'dealer';
  }
}

function matchWinner(matchScore) {
  if (matchScore.player === MATCH_WINNING_SCORE) {
    return 'player';
  } else if (matchScore.dealer === MATCH_WINNING_SCORE) {
    return 'dealer';
  } else {
    return false;
  }
}

function increaseScore(handWinner, matchScore) {
  matchScore[handWinner] += 1;
}

/*********** Main Program ************/
while (true) {
  console.log(`Welcome to ${POINTS_THRESHOLD}!`);
  console.log(`  ...like BlackJack but simpler`);
  console.log(`________________________________\n`);

  console.log(`\nThe first to win ${MATCH_WINNING_SCORE} hands, wins the match\n`);

  let matchScore = {
    dealer: 0,
    player: 0,
  };

  pauseAndDisplay('', PAUSE_TIME * 2);

  while (true) {
    let shuffledDeck = shuffle(BaseDeck());
    let playerHand = [];
    let dealerHand = [];

    pauseAndDisplay('Dealing cards...', PAUSE_TIME);
    initialDeal(shuffledDeck, playerHand, dealerHand);

    playerTurn(shuffledDeck, playerHand, dealerHand);

    if (busted(playerHand)) {
      increaseScore('dealer', matchScore);
      displayHand(playerHand, dealerHand, 'final');
      console.log('\nYou busted... better luck next time');
    } else {
      console.log("\nYou chose to stay!");

      dealersTurn(shuffledDeck, dealerHand);
      console.clear();

      displayHand(playerHand, dealerHand, 'final');
      increaseScore(handWinner(playerHand, dealerHand), matchScore);
    }

    if (busted(dealerHand)) {
      console.log(`\nThe dealer busted.`);
    }

    displayWinner(playerHand, dealerHand, matchScore);
    if (matchWinner(matchScore)) break;

    console.log(`\nPress 'enter' to continue`);
    readline.question();
    console.clear();
  }

  let answer = askToPlayAgain();
  if (answer === 'n') break;
  console.clear();

}
console.clear();
console.log(`Thanks for playing ${POINTS_THRESHOLD} today!`);