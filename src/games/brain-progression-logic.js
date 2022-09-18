import { myRandom, gameCycle } from '../index.js';

const generateProgression = () => {
  const lowerLimitOfElements = 5;
  const upperLimitOfElements = 10;
  const delta = myRandom(20) + 1;
  const progressionStart = myRandom(101);
  const progression = [progressionStart];
  const trueUpperElement = (myRandom(upperLimitOfElements - lowerLimitOfElements + 1)
  + lowerLimitOfElements);
  for (let i = 1; i < trueUpperElement; i += 1) {
    progression[i] = i * delta + progressionStart;
  }
  return progression;
};

const brainProgressionLogic = () => {
  const progression = generateProgression();
  const blankElement = myRandom(progression.length);
  const answer = progression[blankElement];
  progression[blankElement] = '..';
  return [`${progression.join(' ')}`, `${answer}`];
};

const brainProgression = () => {
  gameCycle(brainProgressionLogic);
};

export default brainProgression;
