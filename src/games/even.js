import makeGame from '../game';
import generateNum from '../utils';

const isEven = number => number % 2 === 0;

const makeRound = () => {
  const question = generateNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if number is even, otherwise answer "no".';

export default () => {
  makeGame(description, makeRound);
};
