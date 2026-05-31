const miniArray = {
  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      result.push(fn(arr[i], i, arr));
    }
    return result;
  },

  filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (fn(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
  },

  reduce(arr, fn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i += 1) {
      accumulator = fn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  },
};

console.log(miniArray.map([1, 2, 3], (x) => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], (x) => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
