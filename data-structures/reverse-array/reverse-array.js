

let validator = module.exports = {};

validator.reverseArrayInPlace = (arr) => {
  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    let idx = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = idx;
  }
  return arr;
};



