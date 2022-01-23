'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startesIndex, mainIndex) {
        return [this.starterMenu[startesIndex], this.mainMenu[mainIndex]];
    },
};

// Extracting one by one element
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Using destructing
const [x, y, z] = arr;

// An example that doesn't get all the elements from the array
let [first, second] = restaurant.categories;

// Letting a free space just ignore one element of the array, the element 0 and secondary will be copied
const [d, , e] = restaurant.categories;

// With destructuring you can invert values without a temp variable
[second, first] = [first, second];

// Caling the order method
console.log(restaurant.order(1, 0));

// destructing the method return
const [starter, maindCourse] = restaurant.order(1, 0);
console.log(starter, maindCourse);

// destructing nested
const nested = [1, 3, [2, 4]];
const [g, , [h, j]] = nested;

// default values
const arr2 = [2, 4];
const [o = 1, u = 1, i = 1] = arr2;
