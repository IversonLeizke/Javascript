'stric mode';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

const displatMsg = function (msg) {
    document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 0) {
        if (!guess) {
            displatMsg('â No number!');
        } else if (secretNumber == guess) {
            displatMsg('ð Correct Number');
            if (score > highScore) {
                document.querySelector('.highscore').textContent = score;
                highScore = score;
            }
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        } else if (secretNumber != guess) {
            displatMsg(guess > secretNumber ? 'ð Too high' : 'ð Too low');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    if (score < 1) {
        displatMsg('ðYou missed the game!');
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displatMsg('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});
