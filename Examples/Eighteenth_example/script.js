'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

console.log(arr.splice(2));

console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];

let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

let letters = arr.concat(arr2);

console.log(letters);

console.log(letters.join('-'));

const arr3 = [23, 11, 64];

console.log(arr3.at(1));

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', ' Euro'],
    ['GBP', 'Pound Sterling'],
]);

currencies.forEach(function (value, index, arra) {
    console.log(`The ${index} stand for ${value}.`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

//In sets the key and the value are the same
currenciesUnique.forEach(function (value, key, arr) {
    console.log(`${key}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));

const deposits = movements.filter(function (value) {
    return value > 0;
});

let balance = movements.reduce((acc, value) => acc + value, 0);
