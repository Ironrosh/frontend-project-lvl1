#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greet from '../src/cli.js';

const userName = greet();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let successCount = 0;
while (successCount < 3) {
  const testNumber = Math.floor(Math.random() * 1001);
  const isOdd = testNumber % 2;
  let correctAnswer;
  if (isOdd === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question: ${testNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    successCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
  if (successCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
