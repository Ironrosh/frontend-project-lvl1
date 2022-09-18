import { myRandom, gameCycle } from '../index.js';

const myGCD = (numA, numB) => (!numB ? numA : myGCD(numB, numA % numB));

const brainGCDLogic = () => {
  const numberA = myRandom(100) + 1;
  const numberB = myRandom(100) + 1;

  const gcd = myGCD(numberA, numberB);
  const question = `${numberA} ${numberB}`;

  return [question, `${gcd}`];
};

const brainGCD = () => {
  gameCycle(brainGCDLogic);
};

export default brainGCD;
