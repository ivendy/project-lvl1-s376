import makeGame from '../game';
import generateNum from '../utils';

const findGreatestCommonDivisor = (number1, number2) => {
  const max = Math.max(number1, number2);
  for (let i = max; i > 0; i -= 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) return i;
  }
  return 1;
};

const makeRound = () => {
  const number1 = generateNum(1, 99);
  const number2 = generateNum(1, 99);
  const greatestCommonDivisor = findGreatestCommonDivisor(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, String(greatestCommonDivisor)];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  makeGame(description, makeRound);
};
