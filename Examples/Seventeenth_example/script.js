'use strict';

const bookings = [];

const createBoking = function (flightNum, numPassengers = 60, price = 1000) {
    //we can also use shortcicuting to define the default values ex:
    //numPassengers = numPassengers || 60;
    const booking = { flightNum, numPassengers, price };
    console.log(booking);
    bookings.push(booking);
};

createBoking('LH123', 52, 1500);
createBoking('Lh246');
createBoking('Lh246', undefined, 1300);

// CallBack Function

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}!`);
    };
};

const greeterHey = greet('Hey');

greeterHey('Iverson');

greet('Hello')('Iverson');

const greet2 = greeting => name => console.log(`${greeting} ${name}!`);

greet2("What's up")('Iverson');

const book = function (flighNumber, passenger) {
    console.log(
        `${passenger} book a seat on ${this.airlineName} fligh ${this.iataCode}${flighNumber}`
    );
    this.bookings.push({
        fligh: `${this.iataCode}${flighNumber}`,
        passenger,
    });
};

const lufthansa = {
    airlineName: 'Luththansa',
    iataCode: 'LH',
    bookings: [],
    book,
};

const eurowings = {
    airlineName: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    book,
};

lufthansa.book('123', 'Iverson Leitzke');
eurowings.book('246', 'Iverson Leitzke');

book.call(eurowings, '689', 'Sara Willians');

book.apply(lufthansa, [583, 'George Cooper']);

const bookEw = book.bind(eurowings);

bookEw(741, 'John Smith');

const bookEw23 = book.bind(eurowings, 23);

bookEw23('Robert');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(undefined, 0.2);

console.log(addVAT(200));
