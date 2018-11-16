import makeGame from '../game';

const readlineSync = require('readline-sync');

const makeRound = () => {
  const question = Math.floor(Math.random() * 100);
  console.log(`\nQuestion: ${question}`);
  const isEven = number => ((number % 2) ? 'no' : 'yes');
  return isEven(question);
};

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  return userName;
};

const showRules = () => {
  console.log('Answer "yes" if number is even, otherwise answer "no".');
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showCorrectAnswerMessage = () => {};

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
