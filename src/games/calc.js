import makeGame from '../game';
import generateNum from '../utils';

const Rules = 'What is the result of the expression?';

const operation = ['+', '-', '*'];

const makeRound = () => {
  const number1 = generateNum(0, 10);
  const number2 = generateNum(0, 10);
  const i = generateNum(0, 3);
  const sign = operation[i];
  const question = `${number1} ${sign} ${number2} = ?`;
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
  return [question, String(answer)];
};

export default () => {
  makeGame(Rules, makeRound);
};
