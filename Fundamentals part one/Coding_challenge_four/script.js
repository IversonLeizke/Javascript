let op, bill, tip;

while (op != '1' && op != '2' && op != '3'){
    op = prompt("Select a data from 1 to 3: ")

    switch(op) {
        case '1':
            bill = 275;
            break;
        case '2':
            bill = 40;
            break;
        case '3':
            bill = 430;
            break;
        default:
            alert("Please insert a valid option!")
    }
}

(bill > 50 && bill < 300) ? tip = bill * 0.2 : tip = 0;

alert(`The tip for a bill of ${bill} is ${tip} the final value is ${bill + tip}.`)