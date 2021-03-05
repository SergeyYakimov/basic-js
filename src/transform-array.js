const CustomError = require('../extensions/custom-error');

module.exports = function transform(/*arr*/) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // if (!Array.isArray(arr)) {
  //   throw new Error();
  // }

  // let controlSequences = [];
  // const newArr = [...arr];

  // arr.forEach((item, i) => {
  //   if (typeof item === 'string') {
  //     controlSequences.push({ control: item, pos: i });
  //   }
  // });

  // controlSequences.forEach(({ control, pos }) => {
  //   if (control === '--discard-next' && newArr[pos + 1]) {
  //     delete newArr[pos];
  //     delete newArr[pos + 1];
  //   } else if (control === '--discard-next' && !newArr[pos + 1]) {
  //     delete newArr[pos];
  //   } else if (control === '--discard-prev' && newArr[pos - 1]) {
  //     delete newArr[pos];
  //     delete newArr[pos - 1];
  //   } else if (control === '--discard-prev' && !newArr[pos - 1]) {
  //     delete newArr[pos];
  //   } else if (control === '--double-next' && newArr[pos + 1]) {
  //     newArr.splice(newArr[pos], 0, newArr[pos + 1]);
  //     delete newArr[pos];
  //   } else if (control === '--double-next' && !newArr[pos + 1]) {
  //     delete newArr[pos];
  //   } else if (control === '--double-prev' && newArr[pos - 1]) {
  //     newArr.splice(newArr[pos], 0, newArr[pos - 1]);
  //     delete newArr[pos];
  //   } else if (control === '--double-prev' && !newArr[pos - 1]) {
  //     delete newArr[pos];
  //   }
  // });

  // return newArr.filter((x) => x !== undefined);
  /*const newArr = [];
  let a = 1;

  for (let i = 0; i < arr.length; i = i + a) {
    if (typeof arr[i] !== 'string') {
      newArr.push(arr[i]);
      a = 1;
    } else if (arr[i] === '--discard-next') {
      a = 2;
    } else if (arr[i] === '--discard-prev' && newArr.length) {
      newArr.pop();
      a = 1;
    } else if (arr[i] === '--double-prev' && newArr.length && arr[i - 1]) {
      newArr.push(arr[i - 1]);
      a = 1;
    } else if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
      a = 1;
    }
  }

  return newArr;*/
};
