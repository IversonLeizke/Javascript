//D for dolphins and K for Koalas

let op, Ave, kAve;

while (op != 1 && op != 2 && op != 3) {

    op = prompt("Choose from data 1, 2, or 3, just inform the option:");

    if (op == 1) {
        dAve = (96 + 108 + 89) / 3;
        kAve = (89 + 91 + 110) / 3;
    } else if (op == 2) {
        dAve = (97 + 112 + 101) / 3;
        kAve = (109 + 95 + 123) / 3;
    } else if (op == 3) {
        dAve = (97 + 112 + 101) / 3;
        kAve = (109 + 95 + 106) / 3;
    } else {
        alert("Please insert a valid option!")
    }

}

console.log(dAve, kAve)

if (kAve > 100 || dAve > 100) {
    if (dAve > kAve) {
        alert("The Dolphins Win!!!🏆")
    } else if (kAve > dAve) {
        alert("The Koalas Win!!!🏆")
    } else {
        alert("We have a tie!!!🤝")
    }
} else {
    alert("No team has reached the 100 minimun score.")
}