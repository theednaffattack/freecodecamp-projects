// import { setupCounter } from "./counter.ts";
import "./playing_cards.css";

const diamond = "♦";
const heart = "♥";
const spade = "♠";
const club = "♣";

const cardSuits = [diamond, heart, spade, club];

const cardValues = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];

function arrayRange(stop: number, start: number, step: number) {
  return Array.from({ length: (stop - start) / step + 1 });
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const genCards = arrayRange(randomIntFromInterval(2, 8), 0, 1).map(() => {
  let color = "";
  const rdmCardSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];

  if (rdmCardSuit === diamond || rdmCardSuit === heart) {
    color = "red";
  } else {
    color = "black";
  }

  const rdmCardValue =
    cardValues[Math.floor(Math.random() * cardValues.length)];
  return `
<div class="card ${color}">
        <div class="left">
          <p class="card-value">${rdmCardValue}</p>
          <p class="card-suit">${rdmCardSuit}</p>
        </div>
        <div class="middle">
          <p class="card-suit">${rdmCardSuit}</p>
          <p class="card-suit flip">${rdmCardSuit}</p>
        </div>
        <div class="right">
          <p class="card-suit flip">${rdmCardSuit}</p>
          <p class="card-value flip">${rdmCardValue}</p>
        </div>
      </div>
      `;
});

let showCards = "";

for (const card of genCards) {
  showCards = showCards + card;
}

console.log("HELP", showCards, genCards);

document.querySelector<HTMLDivElement>("#playing-cards")!.innerHTML = showCards;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
