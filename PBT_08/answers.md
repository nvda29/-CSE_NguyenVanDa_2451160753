# PBT_08 - JavaScript Functions, Arrays and Objects

**Ho ten:** Nguyen Van Da  
**MSSV:** 2451160753

---

## PHAN A

### A1 - Function Declaration vs Expression vs Arrow

**3 cach viet:** xem file `tax_insurance.js`

**Hoisting:**
- **Function Declaration:** duoc hoisting toan bo -> goi truoc khi khai bao van chay
- **Function Expression / Arrow:** chi hoisting bien (undefined) -> goi truoc khi gan se loi

```javascript
demoDeclaration(); // OK
function demoDeclaration() {}

demoExpression(); // TypeError
const demoExpression = function () {};
```

### A2 - Scope and Closure

**Doan 1 (counter):**
- increment: 1, 2, 3
- decrement: 2
- getCount: 2

**Doan 2 (setTimeout):**
- var: in 3 lan "var: 3"
- let: in "let: 0", "let: 1", "let: 2"

**Giai thich:** var co function scope, closure giu cung 1 bien i cuoi. let co block scope moi vong lap -> moi setTimeout giu j rieng.

### A3 - Array Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.filter(n => n % 2 === 0);
nums.map(n => n * 3);
nums.reduce((sum, n) => sum + n, 0);
nums.find(n => n > 7);
nums.some(n => n > 10);
nums.every(n => n > 0);
nums.map(n => `So ${n} la ${n % 2 === 0 ? 'chan' : 'le'}`);
[...nums].reverse();
```

### A4 - Destructuring and Spread

```javascript
// name, price, ram, color
// iPhone 16 25990000 8 Titan
// specs: { ram: 8, storage: 256, color: "Titan" }
// updated.price: 23990000
// updated.sale: true
// product.price: 25990000 (goc khong doi)
// product.specs.ram: 16 (shallow copy - object con bi share reference)
```

---

## PHAN C

### C1 - Refactor processOrders

Da refactor trong `refactor_orders.js` - dung filter, map, sort, destructuring, arrow functions (<= 10 dong logic).

### C2 - miniArray

Da implement trong `mini_array.js` - map, filter, reduce tu viet khong dung built-in.

---

## Screenshots can chup

1. A1_tax_insurance - node tax_insurance.js
2. B1_product_manager - node product_manager.js
3. B2_shopping_cart - node shopping_cart.js
4. B3_higher_order - node higher_order.js
5. C1_refactor_orders - node refactor_orders.js
6. C2_mini_array - node mini_array.js

## Video

- Ten file: PBT08_NguyenVanDa_2451160753.mp4
- Noi dung: Code-along Shopping Cart bang Closure (Phan D)
- Dat trong folder videos/
