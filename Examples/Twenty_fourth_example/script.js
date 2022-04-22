const now = new Date();
console.log(new Intl.DateTimeFormat('pt-BR').format(now));
console.log(new Intl.DateTimeFormat('en-US').format(now));

const options = {
    hour: 'numeric',
    minute: 'numeric',
};

console.log(new Intl.DateTimeFormat('pt-BR', options).format(now));

const options2 = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

console.log(new Intl.DateTimeFormat('pt-BR', options2).format(now));

const locale = navigator.language;
console.log(locale);
