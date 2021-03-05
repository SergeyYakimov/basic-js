const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.constructor.name === 'Array'
      ? 1 + Math.max(0, ...arr.map(this.calculateDepth.bind(this)))
      : 0;
  }
};
