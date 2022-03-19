'strict mode';
// Map store values in pars with keys, the difference between map and objects is that the key can be any type

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are opened!')
    .set(false, 'We are closed!');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);

console.log(rest.size);

console.log(rest.clear);

const question = new Map([
    ['question', 'Whats is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['Correct', 3],
    [true, 'Corret 🎉'],
    [false, 'Try again!'],
]);

//Converting from objects to maps

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const hoursMap = new Map(Object.entries(openingHours));

// Iteration over a map

console.log(question.get(`question`));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt(`Your answer: `));
console.log(question.get(answer === question.get('Correct')));
console.log(
    `Your answer ${answer} the correct answer ${question.get('Correct')}`
);

// Converting the map to an array

console.log([...hoursMap]);
