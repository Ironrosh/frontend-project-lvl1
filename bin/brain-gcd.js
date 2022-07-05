#!/usr/bin/env node

import brainGCD from '../games/brain-gcd-logic.js';
import greet from '../src/cli.js';
import { gameCycle, resultText } from '../src/index.js';

const userName = greet();
console.log('What is the result of the expression?');
const result = gameCycle(brainGCD);
resultText(userName, result);
