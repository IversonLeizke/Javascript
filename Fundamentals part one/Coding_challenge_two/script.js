let p1, p2, pw1, pw2, ph1, ph2, pb1, pb2;

p1 = prompt("Please insert the name for the first person: ");
pw1 = prompt(`Please insert the ${p1}'s weight: `);
ph1 = prompt(`Please insert the ${p1}'s height: `);
pb1 = pw1 / ph1 ** 2;
alert(`${p1} weight is ${pw1}, height ${ph1} and his BMI is ${pb1}.`);

p2 = prompt("Please insert the name for the second person: ");
pw2 = prompt(`Please insert the ${p2}'s weight: `);
ph2 = prompt(`Please insert the ${p2}'s height: `);
pb2 = pw2 / ph2 ** 2;
alert(`${p2} weight is ${pw2}, height ${ph2} and his BMI is ${pb2}.`);

if (pb1 > pb2) {
    alert(`The BMI of ${p1} is greater than the BMI of ${p2}.`);
} else {
    alert(`The BMI of ${p2} is greater than the BMI of ${p1}.`);
}