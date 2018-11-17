const readlineSync = require('readline-sync');

const victoryScore = 3;

export default (gameRules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  console.log(`${gameRules}`);

  for (let score = 0; score <= victoryScore; score += 1) {
    if (score === victoryScore) {
      console.log(`\nCongratulations, ${userName}!`);
      return;
    }
    const [question, rightAnswer] = makeRound(); // destructuring assignment, запишу чтоб не забыть
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('\nCorrect!');
    } else {
      console.log(`\n${answer} is wrong answer;(. Correct answer is ${rightAnswer}.
       \nLet's try again, ${userName}!`);
      return;
    }
  }
};
