export default () => {
  const question = Math.floor(Math.random() * 100);
  console.log(`\nQuestion: ${question}`);
  const isEven = number => ((number % 2) ? 'no' : 'yes');
  return isEven(question);
};
