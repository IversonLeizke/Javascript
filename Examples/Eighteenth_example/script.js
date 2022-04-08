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
