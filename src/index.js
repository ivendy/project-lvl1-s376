const readlineSync = require('readline-sync');

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};

const playEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number is even, otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  const playGame = (score) => {
    if (score === 3) {
      console.log(`Congratulations, ${userName}!`); return;
    }
    const question = Math.floor(Math.random() * 100);
    const isEven = number => ((number % 2) ? 'no' : 'yes');
    console.log(`Question: ${question}\n`);
    const answer = readlineSync.question('Your answer: ');
    const isRight = answ => (isEven(question) === answ);
    const message = isRight(answer) ? 'Correct' : `${answer} is wrong answer;(. Correct answer is ${isEven}. \nLet's try again, ${userName}!`;
    console.log(`${message}\n`);
    if (!isRight(answer)) return;
    playGame(score + 1);
  };
  playGame(0);
};

export { greetingUser, playEven };
