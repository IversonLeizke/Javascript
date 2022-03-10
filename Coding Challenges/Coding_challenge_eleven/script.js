'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

for (const [item, value] of game.scored.entries())
    console.log(`Goal ${item + 1}: ${value}`);

let average = 0;

for (const odd of Object.values(game.odds)) average += odd;

average /= Object.values(game.odds).length;

console.log(`Odd of victory ${game?.['team1']}: ${game.odds?.['team1']}`);
console.log(`Odd of draw ${game?.['draw']}: ${game.odds?.['draw']}`);
console.log(`Odd of victory ${game?.['team2']}: ${game.odds?.['team2']}`);

const scores = {};

for (const name of Object.values(game.scored)) {
    if (scores[name]) {
        scores[name]++;
    } else {
        scores[name] = 1;
    }
}
