const dogs = [
    { weight: 22, curfood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curfood: 200, owners: ['Matilda'] },
    { weight: 13, curfood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curfood: 340, owners: ['Michael'] },
];

const recommendedFoodPortion = function (arr) {
    arr.forEach(
        element =>
            (element.recommendedFood = Math.trunc(element.weight ** 0.75 * 28))
    );
};

const findDogByOwner = function (arr, name) {
    return arr.find(element => element.owners.includes(name));
};

recommendedFoodPortion(dogs);

const checkEatingTooMuch = dog =>
    dog.curfood > dog.recommendedFood ? true : false;

const checkEatingHealthly = function (dog) {
    if (
        dog.curfood < dog.recommendedFood * 1.1 &&
        dog.curfood > dog.recommendedFood * 0.9
    ) {
        return true;
    } else {
        return false;
    }
};

const printNames = function (arr, msg) {
    const names = arr.flatMap(arr => arr.owners).join(' and ');
    console.log(`${names}'s ${msg}`);
};

console.log(
    `Sarah's dog is ${
        checkEatingTooMuch(findDogByOwner(dogs, 'Sarah'))
            ? 'eating too much!'
            : 'eating healthly! 🐶'
    }`
);
console.log(checkEatingTooMuch(findDogByOwner(dogs, 'Sarah')));

const ownersEatTooMuch = dogs.filter(element => checkEatingTooMuch(element));

const ownersEatTooLittle = dogs.filter(element => !checkEatingTooMuch(element));

const eatingHealthly = dogs.filter(element => checkEatingHealthly(element));

const sortByRec = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogs);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(eatingHealthly);
console.log(sortByRec);
printNames(ownersEatTooMuch, ' dogs are eating too much!');
printNames(ownersEatTooLittle, 'dogs are eating too little!');
