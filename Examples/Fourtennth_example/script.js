'use strict';

const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);

console.log(orderSet.has('Pizza'));

orderSet.add('Garlic Bread');

orderSet.delete('Pizza');
