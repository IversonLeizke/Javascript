'stric mode';

function calcTip(bill) {
    let tip;
    if (bill > 50 && bill < 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
    console.log(
        `Bill number ${i + 1} is $ ${bills[i]} plus tip of $ ${
            tips[i]
        } equal to $ ${totals[i]}.`
    );
}
