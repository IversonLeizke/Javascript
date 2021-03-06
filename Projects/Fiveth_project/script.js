'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//     'We use cookie for improved, functionality and analytics.';
message.innerHTML =
    'We use cookied for improved, functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
    e.preventDefault();
    message.remove();
});
