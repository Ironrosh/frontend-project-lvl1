import { myRandom, gameCycle } from '../index.js';

const brainEvenLogic = () => {
  const testNumber = myRandom(1001);
  const isOdd = testNumber % 2;
  let correctAnswer;
  if (isOdd === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [testNumber, correctAnswer];
};

const brainEven = () => {
  gameCycle(brainEvenLogic);
};

export default brainEven;
