const { sum } = require('./Math');

console.log('User');
class User {
  constructor () {

  }
}

sum(1,1);

// експорт за замовчанням  ESmodules (ESM)
// export default User;

// експорт за замовчанням CommonJS (CJS)
module.exports = User;
