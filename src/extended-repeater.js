const CustomError = require('../extensions/custom-error');

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  }
) {
  const validStr = String(str);
  const validAdd = String(addition);
  let addStr = '';
  let result = '';

  for (let j = 1; j <= additionRepeatTimes; j++) {
    j < additionRepeatTimes
      ? (addStr += validAdd + additionSeparator)
      : (addStr += validAdd);
  }

  for (let i = 1; i <= repeatTimes; i++) {
    i < repeatTimes
      ? (result += validStr + addStr + separator)
      : (result += validStr + addStr);
  }

  return result;
};
