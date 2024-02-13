
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);

const subtract = (...numbers) => numbers.reduce((acc, num) => acc - num);

// іменний експорт ESmodules (ESM)
// export {sum, subtract};
// export const multiply = (...numbers) => numbers.reduce((acc, num) => acc * num);

// іменний експорт CommonJS (CJS)
module.exports = {
  sum,
  subtract
}
// module.exports.sum = sum;
// module.exports.subtract = subtract;
module.exports.multiply = (...numbers) => numbers.reduce((acc, num) => acc * num);