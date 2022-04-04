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
