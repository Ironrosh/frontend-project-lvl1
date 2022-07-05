import { myRandom } from '../src/index.js';

const brainEven = () => {
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

export default brainEven;
