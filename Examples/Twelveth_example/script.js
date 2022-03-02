'strict mode';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order(starter, main) {
        return [this.starterMenu[starter], this.mainMenu[main]];
    },
};

// with optional chaining operator
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.order?.(1, 0) ?? 'Method does not exist!');

console.log(restaurant.orderDessert?.(1, 0) ?? 'Method does not exist!');
