import makeGame from '../game';
import generateNum from '../utils';

const isEven = number => number % 2 === 0;

const makeRound = () => {
  const question = generateNum(0, 100);
  return [question, isEven(question) ? 'yes' : 'no'];
};

const Rules = 'Answer "yes" if number is even, otherwise answer "no".';

export default () => {
  makeGame(Rules, makeRound);
};
