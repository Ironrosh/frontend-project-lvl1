import readlineSync from 'readline-sync';

const askQuestion = (questionText) => {
  console.log(`Question: ${questionText}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const resultText = (userName, result) => {
  if (result === true) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

const myRandom = (upperLimit) => Math.floor(Math.random() * upperLimit);

const gameCycle = (gameFunction, rounds = 3) => {
  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = gameFunction();

    const userAnswer = askQuestion(question);
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return false;
    }
    console.log('Correct!');
  }
  return true;
};

export { gameCycle, resultText, myRandom };
