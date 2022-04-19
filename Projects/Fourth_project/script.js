'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
    const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;
    containerMovements.innerHTML = '';
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const date = new Date(acc.movementsDates[i]);
        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const year = date.getFullYear();
        const displayDate = `${day}/${month}/${year}`;
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const userName = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(value => value[0])
            .join('');
    });
};

const calcPrintBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, value) => acc + value, 0);
    labelBalance.textContent = `${acc.balance.toFixed(2)} EUR`;
};

const calcDisplaySumary = function (acc) {
    const incomes = acc.movements
        .filter(value => value > 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)} €`;
    const outcomes = acc.movements
        .filter(value => value < 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumOut.textContent = `${outcomes.toFixed(2)} €`;
    const interest = acc.movements
        .filter(value => value > 0)
        .map(mov => (mov * acc.interestRate) / 100)
        .reduce((acc, value) => (value >= 1 ? acc + value : acc), 0);
    labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

userName(accounts);

let currentAccount;

const updateAccount = function (currentAccount) {
    displayMovements(currentAccount);
    calcPrintBalance(currentAccount);
    calcDisplaySumary(currentAccount);
};

//Event  handler
btnLogin.addEventListener('click', function (event) {
    event.preventDefault();
    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome back ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        updateAccount(currentAccount);
        inputLoginPin.value = inputLoginUsername.value = '';
        inputLoginPin.blur();
    }
});

btnTransfer.addEventListener(`click`, function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAccount = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    if (
        amount > 0 &&
        receiverAccount &&
        receiverAccount !== currentAccount &&
        currentAccount.balance >= amount
    ) {
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAccount.movementsDates.push(new Date().toISOString());
        updateAccount(currentAccount);
        inputTransferTo.value = inputTransferAmount.value = '';
    }
});

btnClose.addEventListener(`click`, function (e) {
    e.preventDefault();
    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === +inputClosePin.value
    ) {
        containerApp.style.opacity = 0;
        accounts.splice(
            accounts.findIndex(
                acc => acc.username === inputCloseUsername.value
            ),
            1
        );
        inputClosePin.value = inputCloseUsername.value = '';
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loan = Math.floor(inputLoanAmount.value);
    if (loan > 0 && currentAccount.movements.some(mov => mov >= loan * 0.1)) {
        currentAccount.movements.push(loan);
        currentAccount.movementsDates.push(new Date().toISOString());
    }
    updateAccount(currentAccount);
    inputLoanAmount.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const minutes = `${now.getMinutes()}`.padStart(2, 0);

labelDate.innerHTML = `${day}/${month}/${year}, ${hour}:${minutes}`;
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//Fake Login

currentAccount = account1;
updateAccount(currentAccount);
containerApp.style.opacity = 100;

// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A, B
//return > 0 B, A
