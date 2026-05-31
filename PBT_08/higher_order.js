function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

const process = pipe(
  (x) => x * 2,
  (x) => x + 10,
  (x) => x.toString(),
  (x) => 'Ket qua: ' + x
);

console.log(process(5));

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log('Dang tinh...');
  let result = 0;
  for (let i = 0; i < n; i += 1) result += i;
  return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  console.log('Searching:', query);
}, 500);

search('a');
search('ab');
search('abc');

async function retry(fn, maxAttempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Thu lai lan ${attempt}/${maxAttempts}`);
    }
  }
  throw lastError;
}

(async () => {
  let calls = 0;
  const unstable = async () => {
    calls += 1;
    if (calls < 3) throw new Error('Loi tam thoi');
    return 'Thanh cong';
  };

  const result = await retry(unstable, 3);
  console.log('Retry result:', result);
})();
