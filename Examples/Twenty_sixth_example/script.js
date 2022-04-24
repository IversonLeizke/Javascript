// Set timeout timer, run only once

setTimeout(() => console.log('Here is your pizza!🍕'), 1000);

// for (let i = 20; i >= 0; i--) {
//     setTimeout(() => console.log(i), 20000 - i * 1000);
// }

setTimeout(
    (ing1, ing2) =>
        console.log(`Here is your pizza with ${ing1} and ${ing2}!🍕`),
    2000,
    'olives',
    'bacon'
);

const ingredients = ['olives', 'spinach'];
const pizza = setTimeout(
    (ing1, ing2) =>
        console.log(`Here is your pizza with ${ing1} and ${ing2}!🍕`),
    3000,
    ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizza);
