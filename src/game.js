// это типа движок. он вызывается с названием игры. вызывает
// функцию для этой игры и возвращает ответ да-нет

export default (greetingUser, showRules, makeRound, getAnswer, showCorrectAnswerMessage,
  showWrongAnswerMessage, showVictoryMessage) => {
  const victoryScore = 3;
  const userName = greetingUser();
  showRules();
  let score = 0;
  while (score < victoryScore) {
    const rightAnswer = makeRound(score);
    const answer = getAnswer(); // readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      score += 1;
      showCorrectAnswerMessage();
    } else {
      showWrongAnswerMessage(answer, rightAnswer, userName);
      // console.log(`${answer} is wrong answer;(. Correct answer is ${rightAnswer}.
      // \nLet's try again, ${userName}!`);
      return;
    }
    if (score === victoryScore) {
      showVictoryMessage(userName);
      // console.log(`\nCongratulations, ${userName}!`);
      return;
    }
  }
};
