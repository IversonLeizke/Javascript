'stric mode';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 0) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        } else if (secretNumber == guess) {
            document.querySelector('.message').textContent =
                '🏆 Correct Number';
            if (score > highScore) {
                document.querySelector('.highscore').textContent = score;
                highScore = score;
            }
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
        } else if (secretNumber < guess) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (secretNumber > guess) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        if (score < 1) {
            document.querySelector('.message').textContent =
                '🎆You missed the game!';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});
