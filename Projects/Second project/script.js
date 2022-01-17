'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

btnsOpenModal.forEach((element, key) => {
    element.addEventListener('click', openModal);
});

btn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
