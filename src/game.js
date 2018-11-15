// это типа движок. он вызывается с названием игры. вызывает
// функцию для этой игры и возвращает ответ да-нет
import playEven from './games/even';
import playCalc from './games/calc';

const readlineSync = require('readline-sync');

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  return userName;
};

const showRules = (game) => {
  switch (game) {
    case 'even': {
      console.log('Answer "yes" if number is even, otherwise answer "no".');
      break;
    }
    /*  case 'calc': {
      console.log('What is the result of the expression?');
      break;
    }
  */
    default: {
      console.log('What is the result of the expression?');
    }
  }
};

const makeRound = (game) => {
  switch (game) {
    case 'even': {
      return playEven();
    }
    /*
      case 'calc': {
      return playCalc();
    }
    */
    default: {
      return playCalc();
    }
  }
};

export default (game) => {
  const victoryScore = 3;
  const userName = greetingUser();
  showRules(game);
  let score = 0;
  while (score < victoryScore) {
    const rightAnswer = makeRound(game, score);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) score += 1;
    else {
      console.log(`${answer} is wrong answer;(. Correct answer is ${rightAnswer}. \nLet's try again, ${userName}!`); return; // showFailMessage
    }
    if (score === victoryScore) {
      console.log(`\nCongratulations, ${userName}!`); return; // showVictoryMessage
    }
  }
};
