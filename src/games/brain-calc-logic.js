import { myRandom, gameCycle } from '../index.js';

const brainCalcLogic = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[myRandom(3)];
  const numbers = [myRandom(100), myRandom(100)];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = numbers[0] + numbers[1];
      break;
    case '-':
      correctAnswer = numbers[0] - numbers[1];
      break;
    default:
      correctAnswer = numbers[0] * numbers[1];
  }
  const question = `${numbers[0]} ${operator} ${numbers[1]}`;

  return [question, `${correctAnswer}`];
};

const brainCalc = () => {
  gameCycle(brainCalcLogic);
};

export default brainCalc;
