import makeGame from '../game';
import generateNum from '../utils';

const lengthOfProgression = 10;

const makeProgression = () => {
  const startElement = generateNum(1, 30);
  const step = generateNum(1, 20);
  const hiddenElementPosition = generateNum(0, 10);
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hiddenElementPosition) {
      progression += '.. ';
    } else {
      progression += `${startElement + (step * i)} `;
    }
  }
  const answer = startElement + hiddenElementPosition * step;
  return [progression, answer];
};

const makeRound = () => {
  const [progression, answer] = makeProgression();
  return [progression, String(answer)];
};

const Rules = 'What number is missing in the progression?';

export default () => {
  makeGame(Rules, makeRound);
};
