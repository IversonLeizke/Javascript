const data1 = [
    [3, 5, 2, 12, 7],
    [4, 1, 15, 8, 3],
];

const data2 = [
    [9, 16, 6, 8, 3],
    [10, 5, 6, 1, 4],
];

const newData1 = [...data1[0].slice(1, -1), ...data1[1]];
const newData2 = [...data2[0].slice(1, -1), ...data2[1]];

let age;
let puppy;

const isAPuppy = age => (age >= 3 ? false : true);

const printDogs = function (arr) {
    arr.forEach((element, key) => {
        console.log(
            `Dog number ${key + 1} is ${
                isAPuppy(element) ? 'a puppy🐶' : ' an adult'
            }, and it is ${element} years old.`
        );
    });
};

printDogs(newData1);
printDogs(newData2);

const convertToHumanAge = arr =>
    arr.map(age => (age <= 2 ? age * 2 : age * 4 + 16));

const overEighteen = arr => arr.filter(value => value >= 18);

const average = arr =>
    Math.trunc(arr.reduce((acc, value) => acc + value) / arr.length, 0);

const chaining = arr =>
    Math.trunc(
        arr
            .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
            .filter(value => value >= 18)
            .reduce((acc, value, _, arr2) => acc + value / arr2.length, 0)
    );

humanData1 = average(overEighteen(convertToHumanAge(newData1)));
humanData2 = chaining(newData2);

console.log(humanData1);
console.log(humanData2);
