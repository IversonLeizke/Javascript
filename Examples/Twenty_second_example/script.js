console.log(Number.MAX_SAFE_INTEGER);

//just adding an n at the end of the number for it became a big integer
console.log(465873145687654135432n);
console.log(BigInt(465873145));

//Big integer can only be calculated with anothers big integers

const huge = 5678913498753167894613n;
const num = 26;
console.log(huge * BigInt(num));
console.log(huge * 26n);
