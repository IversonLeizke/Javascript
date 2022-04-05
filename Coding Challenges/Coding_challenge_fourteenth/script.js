const poll = {
    question: "What's your favorite programming language?",
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answer: new Array(4).fill(0),
    registerNewAnswer() {
        console.log(poll.question);
        poll.options.forEach(value => console.log(value));
        console.log('(Write your option number)');
        let option = -1;
        while ((option >= 0 && option <= 3) == false) {
            option = Number(prompt('Insert your option: '));
            if (option >= 0 && option <= 3) {
                poll.answer[option]++;
            } else {
                alert('Invalid option, choose again!');
            }
        }
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type.toLowerCase() == 'string') {
            let results = '';
            this.answer.forEach(value => (results = results + ' ' + value));
            console.log('Poll results are ' + results);
        } else {
            console.log(this.answer);
        }
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

testData1 = [5, 2, 3];
testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answer: testData2 });
poll.displayResults.call({ answer: testData1 });
