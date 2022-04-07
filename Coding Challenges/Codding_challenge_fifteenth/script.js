let blue;

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    blue = function () {
        header.style.color = 'blue';
    };
})();

document.querySelector('body').addEventListener('click', blue);
