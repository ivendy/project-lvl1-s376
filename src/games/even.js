import makeGame from '../game';

const makeRound = () => {
  const question = Math.floor(Math.random() * 100);
  const isEven = number => ((number % 2) ? 'no' : 'yes');
  return [question, isEven(question)];
};

const getRules = () => 'Answer "yes" if number is even, otherwise answer "no".';

export default () => {
  makeGame(getRules, makeRound);
};
