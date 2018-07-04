// import { add } from 'calc';
const calc = require('./calc');

const numberToAdd = [3, 4, 10, 2];

const result = calc.sum(numberToAdd);
console.log(`The result is ${ result }`);