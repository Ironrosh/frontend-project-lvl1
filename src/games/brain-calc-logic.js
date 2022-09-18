import { myRandom, gameCycle } from '../index.js';

const calculateResult = (operator, ...numbers) => {
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
  return correctAnswer;
};

const brainCalcLogic = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[myRandom(operators.length)];
  const numberA = myRandom(100);
  const numberB = myRandom(100);
  const correctAnswer = calculateResult(operator, numberA, numberB);
  const question = `${numberA} ${operator} ${numberB}`;

  return [question, `${correctAnswer}`];
};

const brainCalc = () => {
  gameCycle(brainCalcLogic);
};

export default brainCalc;
