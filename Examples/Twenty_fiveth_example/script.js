const num = 3247961.35;
console.log(num);
console.log(new Intl.NumberFormat('pt-br').format(num));

const option = {
    style: 'unit',
    unit: 'mile-per-hour',
};

console.log(new Intl.NumberFormat('pt-br', option).format(135.85));
