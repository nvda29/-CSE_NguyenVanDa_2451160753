# PBT_07 - JavaScript Basics

**Ho ten:** Nguyen Van Da  
**MSSV:** 2451160753

---

## PHAN A

### A1 - var / let / const

| Doan | Du doan | Ket qua that |
|------|---------|--------------|
| 1 | undefined roi x=5 | Dung - var hoisting |
| 2 | ReferenceError | Dung - TDZ voi let |
| 3 | TypeError | Dung - const khong gan lai |
| 4 | [1,2,3,4] | Dung - const chan gan lai, khong chan push |
| 5 | Trong: 2, Ngoai: 1 | Dung - let co block scope |

**Giai thich:** var duoc hoisting len dau scope, gia tri ban dau undefined. let/const co TDZ nen khong truy cap truoc khi khai bao.

### A2 - Data Types and Coercion

| Bieu thuc | Ket qua |
|-----------|---------|
| typeof null | object (legacy bug) |
| typeof undefined | undefined |
| typeof NaN | number |
| "5" + 3 | 53 |
| "5" - 3 | 2 |
| "5" * "3" | 15 |
| true + true | 2 |
| [] + [] | "" |
| [] + {} | [object Object] |
| {} + [] | [object Object] (trong console.log) |

**Vi sao "5" + 3 khac "5" - 3:** Toan tu + uu tien noi chuoi neu co operand string. Toan tu - ep ve number.

### A3 - == vs ===

| Bieu thuc | Ket qua |
|-----------|---------|
| 5 == "5" | true |
| 5 === "5" | false |
| null == undefined | true |
| null === undefined | false |
| NaN == NaN | false |
| 0 == false | true |
| 0 === false | false |
| "" == false | true |

**Nen dung ===:** tranh ep kieu ngam cua ==, code ro rang va it bug hon.

### A4 - Truthy and Falsy

**Falsy:** false, 0, -0, 0n, "", null, undefined, NaN

| if(...) | In? |
|---------|-----|
| "0" | A - Co |
| "" | B - Khong |
| [] | C - Co |
| {} | D - Co |
| null | E - Khong |
| 0 | F - Khong |
| -1 | G - Co |
| " " | H - Co |

### A5 - Template Literals

```javascript
const greeting = `Xin chao ${name}! Ban ${age} tuoi.`;
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;
const html = `
<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
  <span>Gia: ${price}d</span>
</div>`;
```

---

## PHAN C

### C1 - Debug JavaScript (6+ loi)

| # | Loi | Sua |
|---|-----|-----|
| 1 | if (giaSauGiam = 0) gan thay vi so sanh | Dung === |
| 2 | Gan = 0 lam bien thanh 0, return sai | Chi dung === |
| 3 | giaBan truyen string "100000" | Number(giaBan) + validate |
| 4 | Khong validate giaBan la so | Them check typeof/NaN |
| 5 | for (var i...) + setTimeout in ra 5 lan Item 5 | Doi thanh let i |
| 6 | Closure giu bien i cuoi cung | let tao scope moi moi vong |
| 7 | Thieu xu ly gia am / loi ro rang | Them thong bao loi ro |

File da sua: debug_discount.js

### C2 - Hoa don nha hang

Da viet trong restaurant_bill.js:
- Tong tien tu danh sach mon
- Giam 10% neu >500k, 15% neu >1M
- Giam them 5% neu Wednesday (isWednesday: true)
- VAT 8%, Tip 5% (optional)
- In hoa don dang bang

---

## Screenshots can chup

1. A1_var_let_const - ket qua node var_let_const.js
2. B1_calculator - ket qua node calculator.js
3. B2_student_data - bang diem student_data.js
4. B3_guess_number - game prompt tren browser
5. B4_fizzbuzz - ket qua node fizzbuzz.js
6. C1_debug - ket qua node debug_discount.js
7. C2_restaurant_bill - ket qua node restaurant_bill.js

## Video

- Ten file: PBT07_NguyenVanDa_2451160753.mp4
- Dat trong folder videos/
- Noi dung: var/let/const + type coercion + == vs === + chay calculator.js (theo Phan D de bai)
