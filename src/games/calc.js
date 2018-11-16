import makeGame from '../game';

const readlineSync = require('readline-sync');

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  return userName;
};

const showRules = () => {
  console.log('What is the result of the expression?');
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showCorrectAnswerMessage = () => {};

const showWrongAnswerMessage = (answer, rightAnswer, userName) => {
  console.log(`${answer} is wrong answer;(. Correct answer is ${rightAnswer}. \nLet's try again, ${userName}!`);
};

const showVictoryMessage = (userName) => {
  console.log(`\nCongratulations, ${userName}!`);
};

const makeRound = () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const i = Math.floor(Math.random() * 3);
  const operation = ['+', '-', '*'];
  const sign = operation[i];
  console.log(`\nQuestion: ${number1} ${sign} ${number2} = ?`);
  const findAnswer = () => {
    switch (sign) {
      case '+': {
        return number1 + number2;
      }
      case '-': {
        return number1 - number2;
      }
      default: {
        return number1 * number2;
      }
    }
  };
  const answer = findAnswer();
  return String(answer);
};

export default () => {
  makeGame(greetingUser, showRules, makeRound, getAnswer, showCorrectAnswerMessage,
    showWrongAnswerMessage, showVictoryMessage);
};
