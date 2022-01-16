'use strict'

//The team can only win if it's score average is more than the double of oponet score average

const calcAverage = (grade1, grade2, grade3) => (grade1 + grade2 + grade3) / 3;

const checkWinner = function(team1, av1, team2, av2) {
    if (av1 > (av2 * 2)) {
        console.log(`The ${team1} wins🏆!!! ${av1} vs ${av2}.`);
    } else if(av2 > (av1 * 2)) {
        console.log(`The ${team2} wins🏆!!! ${av2} vs ${av1}.`);
    } else {
        console.log("Theres is no Winner!☹️")
    }
}

let op, avD, avK; // Dolphins and Koalas

while (op != "1" && op != "2") {
    op = prompt("Choose between data 1 and 2:");
    if (op == 1) {
        avD = calcAverage(44, 23, 71);
        avK = calcAverage(65, 54, 49);
    } else {
        avD = calcAverage(85, 54, 41);
        avK = calcAverage(23, 34, 27);
    }
}

checkWinner("Dolphins", avD, "Koalas", avK);