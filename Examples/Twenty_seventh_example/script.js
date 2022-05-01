//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const selectAll = document.querySelectorAll('h1');
console.log(selectAll);

//Creating elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//     'We use cookie for improved, functionality and analytics.';
message.innerHTML =
    'We use cookie for improved, functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
document.body.appendChild(message);

// Deleting elements
document.querySelector('.btn--close-cookie').addEventListener('click', e => {
    e.preventDefault();
    message.remove();
});
