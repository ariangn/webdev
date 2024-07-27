const gridContainer = document.getElementById("game-container");
//create variables
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let isGameStarted = false;

//select from the score on our html
document.querySelector(".score").textContent = score;

//start the actual game
function startGame() {
  if (!isGameStarted) {
    isGameStarted = true;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('flipped');
    });

    setTimeout(() => {
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('flipped');
      });
      lockBoard = false;
    }, 3000); 
  }
}

//click~
document.getElementById("start-button").addEventListener("click", startGame);

for (let i = 1; i <= 8; i++) {
  const card = { name: `image${i}`, image: `images/image${i}.png` };
  cards.push(card, { ...card }); 
}
//shuffle and generate the card again~
shuffleCards();
generateCards();

//shuffling
function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}
//generating
function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}
//flip the card either stay or change
function flipCard() {
  if (!isGameStarted) {
    return; 
  }

  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}
//matching or not?
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');
  if (allCardsMatched()) {
    // might add stuff later
  }
  resetBoard();
}
//yes, matched
function allCardsMatched() {
  const allCards = document.querySelectorAll('.card');
  const matchedCards = document.querySelectorAll('.card.matched');

  return allCards.length === matchedCards.length;
}

function unflipCards() {
  setTimeout(() => {
    const flippedCards = document.querySelectorAll('.flipped');

    flippedCards.forEach(card => {
      if (!card.classList.contains('matched')) {
        card.classList.remove("flipped");
      }
    });

    resetBoard();
  }, 1000);
}
//reset all the game
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
//restart
function restart() {
  location.reload();
}
