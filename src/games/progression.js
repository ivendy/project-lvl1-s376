export default () => {
  const startNumber = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 20) + 1;
  const hidedNumber = Math.floor(Math.random() * 10);
  const lengthOfProgression = 10;
  let progression = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === hidedNumber) {
      progression += ' .. ';
    } else {
      progression += `${startNumber + (step * i)} `;
    }
  }
  console.log(`\nQuestion: ${progression}`);
  const answer = startNumber + hidedNumber * step;
  return String(answer);
};
