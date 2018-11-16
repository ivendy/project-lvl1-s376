import makeGame from '../game';

const makeRound = () => {
  const number1 = Math.floor(Math.random() * 99) + 1;
  const number2 = Math.floor(Math.random() * 99) + 1;
  const max = Math.max(number1, number2);
  const findNod = () => {
    for (let i = max; i > 0; i -= 1) {
      if ((number1 % i === 0) && (number2 % i === 0)) return i;
    }
    return 1;
  };
  const nod = findNod();
  const question = `${number1} ${number2}`;
  return [question, String(nod)];
};

const getRules = () => 'Find the greatest common divisor of given numbers.';

export default () => {
  makeGame(getRules, makeRound);
};
