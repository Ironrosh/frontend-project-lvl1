#!/usr/bin/env node

import greet from '../src/cli.js';
import { gameCycle, resultText } from '../src/index.js';
import brainPrime from '../games/brain-prime-logic.js';

const userName = greet();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const result = gameCycle(brainPrime);
resultText(userName, result);
