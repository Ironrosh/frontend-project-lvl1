import { myRandom, gameCycle } from '../index.js';

const isPrime = (numb) => {
  let correctAnswer;
  if (numb <= 1) {
    correctAnswer = 'no';
  }
  correctAnswer = 'yes';
  for (let i = 2; i * i <= numb; i += 1) {
    if (numb % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return correctAnswer;
};

const brainPrimeLogic = () => {
  const questionNumber = myRandom(101);
  const correctAnswer = isPrime(questionNumber);
  return [`${questionNumber}`, correctAnswer];
};

const brainPrime = () => {
  gameCycle(brainPrimeLogic);
};

export default brainPrime;
