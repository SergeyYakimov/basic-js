const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  return matrix.reduce((acc, item) => {
    const arrCats = item.filter((x) => x === '^^');
    return acc + arrCats.length;
  }, 0);
};
