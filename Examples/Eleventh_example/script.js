'use strict';

const restaurant = {
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [index, item] of menu.entries()) console.log(`${index} - ${item}`);
