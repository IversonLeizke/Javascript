'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('curretn--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

function init() {
    playing = true;
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.getElementById(`current--1`).textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    score0El.textContent = score1El.textContent = 0;
}

init();

// Change the player
const changePlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a randon dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for a rolled one, if true switch for next player
        if (dice != 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            changePlayer();
        }
    }
});

// Hold the point
btnhold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        activePlayer == 0
            ? (score0El.textContent = scores[activePlayer])
            : (score1El.textContent = scores[activePlayer]);
        if (scores[activePlayer] >= 100) {
            console.log(`The player ${activePlayer + 1} won the game.`);
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
            playing = false;
            diceEl.classList.add('hidden');
        } else {
            changePlayer();
        }
    }
});

btnNew.addEventListener('click', init);
