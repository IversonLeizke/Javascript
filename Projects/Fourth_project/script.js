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

const displayDate = function (date) {
    const days = Math.trunc((new Date() - date) / (1000 * 60 * 60 * 24));
    if (days == 0) {
        return 'Today';
    } else if (days == 1) {
        return 'Yesterday';
    } else if (days <= 7) {
        return `${days} days ago`;
    } else {
        return new Intl.DateTimeFormat(currentAccount.locale).format(date);
    }
};

const formattedMov = (value, loc, cur) =>
    new Intl.NumberFormat(loc, {
        style: 'currency',
        currency: cur,
    }).format(value);

const displayMovements = function (acc, sort = false) {
    const movs = sort
        ? acc.movements.slice().sort((a, b) => a - b)
        : acc.movements;
    containerMovements.innerHTML = '';
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const date = new Date(acc.movementsDates[i]);
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate(date)}</div>
        <div class="movements__value">${formattedMov(
            mov,
            acc.locale,
            acc.currency
        )}</div>
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
    labelBalance.textContent = formattedMov(
        acc.balance,
        acc.locale,
        acc.currency
    );
};

const calcDisplaySumary = function (acc) {
    const incomes = acc.movements
        .filter(value => value > 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumIn.textContent = formattedMov(incomes, acc.locale, acc.currency);
    const outcomes = acc.movements
        .filter(value => value < 0)
        .reduce((acc, value) => acc + value, 0);
    labelSumOut.textContent = formattedMov(outcomes, acc.locale, acc.currency);
    const interest = acc.movements
        .filter(value => value > 0)
        .map(mov => (mov * acc.interestRate) / 100)
        .reduce((acc, value) => (value >= 1 ? acc + value : acc), 0);
    labelSumInterest.textContent = formattedMov(
        interest,
        acc.locale,
        acc.currency
    );
};

userName(accounts);

let currentAccount, timer;

const updateAccount = function (currentAccount) {
    displayMovements(currentAccount);
    calcPrintBalance(currentAccount);
    calcDisplaySumary(currentAccount);
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
};

const startLogOutTimer = function () {
    let time = 60 * 5;
    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        labelTimer.textContent = `${min}:${sec}`;
        time--;
        if (time === -1) {
            clearInterval(timer);
            labelWelcome.textContent = 'Log in to get started';
            containerApp.style.opacity = 0;
        }
    };
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
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
    const now = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    };

    labelDate.innerHTML = Intl.DateTimeFormat(
        currentAccount.locale,
        options
    ).format(now);
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
    setTimeout(() => {
        const loan = Math.floor(inputLoanAmount.value);
        if (
            loan > 0 &&
            currentAccount.movements.some(mov => mov >= loan * 0.1)
        ) {
            currentAccount.movements.push(loan);
            currentAccount.movementsDates.push(new Date().toISOString());
        }
        updateAccount(currentAccount);
        inputLoanAmount.value = '';
    }, 3000);
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//Fake Login

// currentAccount = account1;
// updateAccount(currentAccount);
// containerApp.style.opacity = 100;

// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A, B
//return > 0 B, A
