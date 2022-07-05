#!/usr/bin/env node

import brainProgression from '../games/brain-progression-logic.js';
import greet from '../src/cli.js';
import { gameCycle, resultText } from '../src/index.js';

const userName = greet();
console.log('What is the result of the expression?');
const result = gameCycle(brainProgression);
resultText(userName, result);
