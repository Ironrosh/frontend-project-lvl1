import { myRandom, gameCycle } from '../index.js';

const isEven = (numb) => numb % 2 === 0;

const brainEvenLogic = () => {
  const testNumber = myRandom(1001);
  const isNumEven = isEven(testNumber);
  const correctAnswer = isNumEven ? 'yes' : 'no';
  return [testNumber, correctAnswer];
};

const brainEven = () => {
  gameCycle(brainEvenLogic);
};

export default brainEven;
