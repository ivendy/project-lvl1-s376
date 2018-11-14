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
  const playGame = (q) => {
    const num = Math.floor(Math.random() * 100);
    const isEven = (num % 2) ? 'no' : 'yes';
    console.log(`Question: ${num}\n`);
    const answer = readlineSync.question('Your answer: ');
    const right = (isEven === answer);
    const message = right ? 'Correct' : `${answer} is wrong answer;(. Correct answer is ${isEven}. \nLet's try again, ${userName}!`;
    console.log(`${message}\n`);
    if (!right) return false;
    if ((q + 1) === 3) {
      console.log(`Congratulations, ${userName}!`); return true;
    }
    return playGame(q + 1);
  };
  playGame(0);
};

export { greetingUser, playEven };
