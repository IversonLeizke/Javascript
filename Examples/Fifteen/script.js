// Map store values in pars with keys, the difference between map and objects is that the key can be any type

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest.set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are opened!')
    .set(false, 'We are closed!');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2);

console.log(rest.size);

console.log(rest.clear);
