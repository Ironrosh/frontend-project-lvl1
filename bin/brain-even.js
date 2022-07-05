#!/usr/bin/env node

import greet from '../src/cli.js';
import { gameCycle, resultText } from '../src/index.js';
import brainEven from '../games/brain-even-logic.js';

const userName = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const result = gameCycle(brainEven);
resultText(userName, result);
