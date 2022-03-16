// Map store values in pars with keys, the difference between map and objects is that the key can be any type

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
    .set('Open', 11)
    .set('close', 23)
    .set(true, 'We are opened!')
    .set(false, 'We are closed!');

console.log(rest.get('name'));
console.log(rest.get(true));
