'stric mode';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 0) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        } else if (secretNumber == guess) {
            document.querySelector('.message').textContent =
                '🏆 Correct Number';
            if (score > highScore)
                document.querySelector('.highscore').textContent = score;
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
