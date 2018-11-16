const readlineSync = require('readline-sync');

export default (getRules, makeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!\n`);
  const gameRules = getRules();
  console.log(`${gameRules}`);

  const victoryScore = 3;
  let score = 0;
  while (score < victoryScore) {
    const questionAndAnswer = makeRound();
    const question = questionAndAnswer[0];
    console.log(`\nQuestion: ${question}`);
    const rightAnswer = questionAndAnswer[1];
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      score += 1;
      console.log('\nCorrect!');
    } else {
      console.log(`\n${answer} is wrong answer;(. Correct answer is ${rightAnswer}.
       \nLet's try again, ${userName}!`);
      return;
    }
    if (score === victoryScore) {
      console.log(`\nCongratulations, ${userName}!`);
      return;
    }
  }
};
