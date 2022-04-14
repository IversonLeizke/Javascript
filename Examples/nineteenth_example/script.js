// Using a constructor to creat an element and just passing one argment will creat an array with that amount of itens empty
let x = new Array(7);

// You can define the value that is gonna fill and one begin and one end
x.fill(1);

console.log(x);

let arr = Array.from({ length: 7 }, (_, i) => i);

console.log(arr);

const arr2 = Array.from({ length: 100 }, () =>
    Math.trunc(Math.random() * 6 + 1)
);
