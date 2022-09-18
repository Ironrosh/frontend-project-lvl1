import readlineSync from 'readline-sync';

const myRandom = (upperLimit) => Math.floor(Math.random() * upperLimit);

const rounds = 3;

const gameCycle = (gameFunction) => {
  let failed = false;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = gameFunction();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      failed = true;
      break;
    }
    console.log('Correct!');
  }
  if (!failed) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { gameCycle, myRandom };
