import { myRandom, gameCycle } from '../index.js';

const calculateResult = (operator, numberA, numberB) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = numberA + numberB;
      break;
    case '-':
      correctAnswer = numberA - numberB;
      break;
    default:
      correctAnswer = numberA * numberB;
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
