const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));

console.log(airline.lastIndexOf('i'));

console.log(airline.slice(4));

console.log(airline.toLowerCase());

console.log(airline.toUpperCase());

console.log(' Iverson'.toLowerCase().trim());

console.log('288.25'.replace('.', ','));

const announcement =
    'All passengers come to boarding door 23. Boarding door 23.';

console.log(announcement.replace(/door/g, 'gate'));

const plane2 = 'A320neo';

console.log(plane2.includes('320'));

console.log(plane2.startsWith('A420'));

console.log(plane2.endsWith('neo'));

const [firstname, lastName] = 'Iverson Leitzke'.split(' ');

const newName = ['Mr.', firstname, lastName.toUpperCase()].join(' ');

console.log(newName.padStart(20, '>'));

//Immediately invoked Function Expression
(function () {
    console.log('This only run once!');
})();

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passegers`);
    };
};

const booker = secureBooking();

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

g();
f();
