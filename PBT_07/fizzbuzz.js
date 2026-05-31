console.log('=== FizzBuzz Classic (1-30) ===');
for (let i = 1; i <= 30; i += 1) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}

function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i += 1) {
    let output = '';
    rules.forEach((rule) => {
      if (i % rule.divisor === 0) output += rule.word;
    });
    console.log(output || i);
  }
}

console.log('\n=== Custom FizzBuzz ===');
customFizzBuzz(35, [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' },
  { divisor: 7, word: 'Jazz' },
]);

console.log('\n=== Test case 105 ===');
customFizzBuzz(105, [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' },
  { divisor: 7, word: 'Jazz' },
]);
