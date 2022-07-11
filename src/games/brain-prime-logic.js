import { myRandom, gameCycle } from '../index.js';

const brainPrimeLogic = () => {
  const questionNumber = myRandom(101);
  let correctAnswer;
  if (questionNumber <= 1) {
    correctAnswer = 'no';
  }
  correctAnswer = 'yes';
  for (let i = 2; i * i <= questionNumber; i += 1) {
    if (questionNumber % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return [`${questionNumber}`, correctAnswer];
};

const brainPrime = () => {
  gameCycle(brainPrimeLogic);
};

export default brainPrime;
