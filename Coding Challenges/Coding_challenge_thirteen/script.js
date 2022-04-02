'strict mode';
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').textContent = 'Submit';
document.querySelector('textarea').style.display = 'block';
document.querySelector('textarea').style.marginBottom = '10px';
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value.split('\n');
    for (const row in text) {
        const [first, second] = text[row].toLowerCase().trim().split('_');
        const output = `${`${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`.padEnd(20, ' ')}${'✅'.repeat(Number(row) + 1)}`;
        console.log(output);
    }
});
