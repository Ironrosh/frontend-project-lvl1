#!/usr/bin/env node

import greet from '../src/cli.js';
import { gameCycle, resultText } from '../src/index.js';
import brainCalc from '../games/brain-calc-logic.js';

const userName = greet();
console.log('What is the result of the expression?');
const result = gameCycle(brainCalc);
resultText(userName, result);
