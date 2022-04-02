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
