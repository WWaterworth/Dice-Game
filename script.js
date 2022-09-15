'use strict';

//Selecting elements
const diceEl = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Default state
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generate random roll between 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display image of rolled dice number
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check if roll is a 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
