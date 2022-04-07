'use strict';

//Let's build a simple poll app!
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };
// console.log(poll);
// // {
//   question: 'What is your favourite programming language?',
//   options: [ '0: JavaScript', '1: Python', '2: Rust', '3: C++' ],
//   answers: [ 0, 0, 0, 0 ]
// }

//1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option new line)`
      )
    );
    console.log(answer);
    //update answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++; //nice usecase for short circuting
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
poll.registerNewAnswer();
//2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//3 displayResult

//4
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //Poll results are 5, 2, 3 we using call method because the program looking for this.answers and we wanted to work with the test data
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1
