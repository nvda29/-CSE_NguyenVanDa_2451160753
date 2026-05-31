function calculate(num1, operator, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || Number.isNaN(num1) || Number.isNaN(num2)) {
    return 'Loi: Input khong phai so';
  }

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return 'Loi: Khong the chia cho 0';
      return num1 / num2;
    case '%':
      return num1 % num2;
    case '**':
      return num1 ** num2;
    default:
      return `Loi: Operator '${operator}' khong hop le`;
  }
}

console.log(calculate(10, '+', 5));
console.log(calculate(10, '/', 0));
console.log(calculate(10, '^', 5));
console.log(calculate('abc', '+', 5));
console.log(calculate(2, '**', 10));
