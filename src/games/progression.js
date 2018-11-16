import makeGame from '../game';

const readlineSync = require('readline-sync');

const makeRound = () => {
  const startNumber = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 20) + 1;
  const hidedNumber = Math.floor(Math.random() * 10);
  const lengthOfProgression = 10;
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hidedNumber) {
      progression += '.. ';
    } else {
      progression += `${startNumber + (step * i)} `;
    }
  }
  console.log(`\nQuestion: ${progression}`);
  const answer = startNumber + hidedNumber * step;
  return String(answer);
};

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  return userName;
};

const showRules = () => {
  console.log('What number is missing in the progression?');
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
