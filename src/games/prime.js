import makeGame from '../game';
import generateNum from '../utils';

const Rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const makeRound = () => {
  const question = generateNum(2, 1000);
  return [question, isPrime(question) ? 'yes' : 'no'];
};

export default () => {
  makeGame(Rules, makeRound);
};
