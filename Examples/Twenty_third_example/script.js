//Creat a date
const now = new Date();

console.log(now);

console.log(new Date('Apr 19 2022 16:10:47'));
console.log(new Date('Sep 21 2018'));
console.log(new Date('2019-11-01T13:15:33.035Z'));

//Working with dates
const future = new Date(2037, 10, 19, 20);
console.log(future);
console.log(future.getFullYear());
console.log(future.getDay());
console.log(future.getMonth());
console.log(future.getTime());
