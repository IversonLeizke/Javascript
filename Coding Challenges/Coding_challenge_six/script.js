function calcTip(bill) {
    let tip;
    if (bill > 50 && bill <300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

let bills = [125, 555, 44];
let tips = [];
let totals = [];

bills.forEach(element => {
    tips.push(calcTip(element));
    totals.push(calcTip(element) + element);
});

console.log("Bills values: ", bills);
console.log("Tips values: ", tips);
console.log("Totals values: ", totals);