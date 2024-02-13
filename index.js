// імпорт за замовчанням  ESmodules (ESM)
// import User from './User.js';

// імпорт за замовчанням CommonJS (CJS)
const User = require('./User.js');

// іменний імпорт ESmodules (ESM)
// import { sum, subtract, multiply as mult } from './Math.js';

// іменний імпорт CommonJS (CJS)
const { sum, subtract, multiply: mult } = require('./Math.js');

console.log(User);
console.log(sum(5,5,7,9));
