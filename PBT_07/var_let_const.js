// PBT_07 - A1: Kiem chung var / let / const
// Chay: node var_let_const.js

console.log('=== Doan 1: var hoisting ===');
console.log(x);
var x = 5;
console.log('x sau gan:', x);

console.log('\n=== Doan 4: const array ===');
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log('\n=== Doan 5: block scope ===');
let a = 1;
{
  let a = 2;
  console.log('Trong block:', a);
}
console.log('Ngoai block:', a);

// Doan 2 va 3: mo rieng tung doan de xem loi (ReferenceError / TypeError)
// console.log(y); let y = 10;
// const z = 15; z = 20;
