import makeGame from '../game';
import generateNum from '../utils';

const lengthOfProgression = 10;

const makeRound = () => {
  const startElement = generateNum(1, 30);
  const step = generateNum(1, 20);
  const hiddenElementPosition = generateNum(0, lengthOfProgression);
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenElementPosition) {
      progression += '.. ';
    } else {
      progression += `${startElement + (step * i)} `;
    }
  }
  const answer = startElement + hiddenElementPosition * step;
  return [progression, String(answer)];
};

const description = 'What number is missing in the progression?';

export default () => {
  makeGame(description, makeRound);
};
