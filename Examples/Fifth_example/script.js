'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (startesIndex, mainIndex) {
        return [this.starterMenu[startesIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ startesIndex, mainIndex, time, address }) {
        console.log(
            `Order received! ${this.starterMenu[startesIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
        );
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Rua Aldano José Vieira, 712',
    mainIndex: 2,
    startesIndex: 2,
});

const { name, openingHours, categories } = restaurant;
// Destructing an object, the name of the variables must be the same of the object properties

const { name: restaurantName, location: address } = restaurant;
// we should this pattern if we want to gave a different name for the variable that is not the properties name

const { menu = ['french fries'] } = restaurant;
// how to set default values if the property is not found in the object

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

// nested objects
const {
    fri: { open, close },
} = openingHours;
