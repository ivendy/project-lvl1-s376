import makeGame from '../game';

const readlineSync = require('readline-sync');

const makeRound = () => {
  const number1 = Math.floor(Math.random() * 99) + 1;
  const number2 = Math.floor(Math.random() * 99) + 1;
  const max = Math.max(number1, number2);
  const findNod = () => {
    for (let i = max; i > 0; i -= 1) {
      if ((number1 % i === 0) && (number2 % i === 0)) return i;
    }
    return 1;
  };
  const nod = findNod();
  console.log(`\nQuestion: ${number1} ${number2}`);
  return String(nod);
};

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  return userName;
};

const showRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showCorrectAnswerMessage = () => {
  console.log('Correct!');
};

const showWrongAnswerMessage = (answer, rightAnswer, userName) => {
  console.log(`${answer} is wrong answer;(. Correct answer is ${rightAnswer}. \nLet's try again, ${userName}!`);
};

const showVictoryMessage = (userName) => {
  console.log(`\nCongratulations, ${userName}!`);
};

export default () => {
  makeGame(greetingUser, showRules, makeRound, getAnswer, showCorrectAnswerMessage,
    showWrongAnswerMessage, showVictoryMessage);
};
