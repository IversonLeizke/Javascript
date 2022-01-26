'strict mode';

// Unpack a array, you just have to add three dots before the array to be unpacked
const arr = [7, 8, 9];
const arr2 = [1, 2, ...arr];

const restaurant = {};

const newRestaurant = { ...restaurant, founder: 'Guissepe' };
