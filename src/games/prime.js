import makeGame from '../game';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true; // почему избыточная проверка? без нее же false возвращает
  for (let i = 2; i * i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const makeRound = () => {
  const question = generateNum(2, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  makeGame(description, makeRound);
};
