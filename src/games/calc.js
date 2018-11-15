export default () => {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  const i = Math.floor(Math.random() * 3);
  const operation = ['+', '-', '*'];
  const sign = operation[i];
  console.log(`\nQuestion: ${number1} ${sign} ${number2} = ?`);
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
  return String(answer);
};
