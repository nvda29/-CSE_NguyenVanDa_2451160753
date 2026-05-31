const menu = [
  { name: 'Pho bo', price: 65000, qty: 2 },
  { name: 'Tra da', price: 5000, qty: 3 },
  { name: 'Bun cha', price: 55000, qty: 1 },
];

const options = {
  isWednesday: false,
  includeTip: true,
};

function formatMoney(value) {
  return value.toLocaleString('vi-VN') + 'd';
}

function padLine(left, right, width = 38) {
  const spaces = Math.max(1, width - left.length - right.length);
  return left + ' '.repeat(spaces) + right;
}

function calculateBill(items, config) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.price * item.qty;
  });

  let discountRate = 0;
  if (subtotal > 1000000) discountRate = 0.15;
  else if (subtotal > 500000) discountRate = 0.10;

  if (config.isWednesday) discountRate += 0.05;

  const discount = Math.round(subtotal * discountRate);
  const afterDiscount = subtotal - discount;
  const vat = Math.round(afterDiscount * 0.08);
  const tip = config.includeTip ? Math.round(afterDiscount * 0.05) : 0;
  const total = afterDiscount + vat + tip;

  return { subtotal, discountRate, discount, vat, tip, total, items };
}

const bill = calculateBill(menu, options);

console.log('╔══════════════════════════════════════╗');
console.log('║        HOA DON NHA HANG              ║');
console.log('╠══════════════════════════════════════╣');

bill.items.forEach((item, index) => {
  const lineTotal = item.price * item.qty;
  const left = `${index + 1}. ${item.name.padEnd(10)} x${item.qty} @${Math.round(item.price / 1000)}k`;
  const right = `= ${formatMoney(lineTotal)}`;
  console.log('║ ' + padLine(left, right) + ' ║');
});

console.log('╠══════════════════════════════════════╣');
console.log('║ ' + padLine('Tong cong:', formatMoney(bill.subtotal)) + ' ║');
console.log('║ ' + padLine(`Giam gia (${Math.round(bill.discountRate * 100)}%):`, formatMoney(bill.discount)) + ' ║');
console.log('║ ' + padLine('VAT (8%):', formatMoney(bill.vat)) + ' ║');
console.log('║ ' + padLine('Tip (5%):', formatMoney(bill.tip)) + ' ║');
console.log('╠══════════════════════════════════════╣');
console.log('║ ' + padLine('THANH TOAN:', formatMoney(bill.total)) + ' ║');
console.log('╚══════════════════════════════════════╝');
