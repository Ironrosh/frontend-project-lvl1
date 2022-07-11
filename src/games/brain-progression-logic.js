import { myRandom, gameCycle } from '../index.js';

const brainProgressionLogic = () => {
  const lowerLimitOfElements = 5;
  const upperLimitOfElements = 10;
  const delta = myRandom(20) + 1;
  const progressionStart = myRandom(101);
  const progression = [progressionStart];
  for (let i = 1; i < (myRandom(upperLimitOfElements - lowerLimitOfElements + 1)
        + lowerLimitOfElements); i += 1) {
    progression[i] = progression[i - 1] + delta;
  }
  const blankElement = myRandom(progression.length);
  const answer = progression[blankElement];
  progression[blankElement] = '..';
  return [`${progression}`.replaceAll(',', ' '), `${answer}`];
};

const brainProgression = () => {
  gameCycle(brainProgressionLogic);
};

export default brainProgression;
