import { myRandom } from '../src/index.js';

const brainGCD = () => {
  const numbers = [myRandom(100) + 1, myRandom(100) + 1];

  let gcd = 1;
  for (let i = 2; i <= Math.min(numbers[0], numbers[1]); i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      gcd = i;
    }
  }
  const question = `${numbers[0]} ${numbers[1]}`;

  return [question, `${gcd}`];
};

export default brainGCD;
