import makeGame from '../game';

const makeRound = () => {
  const startNumber = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 20) + 1;
  const hidedNumber = Math.floor(Math.random() * 10);
  const lengthOfProgression = 10;
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hidedNumber) {
      progression += '.. ';
    } else {
      progression += `${startNumber + (step * i)} `;
    }
  }
  const answer = startNumber + hidedNumber * step;
  return [progression, String(answer)];
};

const getRules = () => 'What number is missing in the progression?';

export default () => {
  makeGame(getRules, makeRound);
};
