function createCart() {
  let items = [];
  let discountCode = null;

  function getDiscountAmount(subtotal) {
    switch (discountCode) {
      case 'SALE10':
        return subtotal * 0.1;
      case 'SALE20':
        return subtotal * 0.2;
      case 'FREESHIP':
        return 30000;
      default:
        return 0;
    }
  }

  return {
    addItem(product, quantity = 1) {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
        });
      }
    },

    removeItem(productId) {
      items = items.filter((item) => item.id !== productId);
    },

    updateQuantity(productId, newQuantity) {
      const target = items.find((item) => item.id === productId);
      if (!target) return;
      if (newQuantity <= 0) {
        this.removeItem(productId);
        return;
      }
      target.quantity = newQuantity;
    },

    getSubtotal() {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    getTotal() {
      const subtotal = this.getSubtotal();
      return Math.max(0, subtotal - getDiscountAmount(subtotal));
    },

    applyDiscount(code) {
      discountCode = code;
    },

    printCart() {
      console.log('┌──────────────────────────────────────────────┐');
      console.log('│ # │ San pham       │ SL │ Don gia     │ Tong        │');
      items.forEach((item, index) => {
        const lineTotal = item.price * item.quantity;
        const row = [
          String(index + 1).padStart(1),
          item.name.padEnd(14),
          String(item.quantity).padStart(2),
          item.price.toLocaleString('vi-VN').padStart(11),
          lineTotal.toLocaleString('vi-VN').padStart(11),
        ].join(' │ ');
        console.log(`│ ${row} │`);
      });
      console.log('├──────────────────────────────────────────────┤');
      console.log(`│ Tong cong:                       ${this.getTotal().toLocaleString('vi-VN')}d │`);
      console.log('└──────────────────────────────────────────────┘');
    },

    getItemCount() {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },

    clearCart() {
      items = [];
      discountCode = null;
    },
  };
}

const cart = createCart();

cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);
cart.addItem({ id: 3, name: 'AirPods Pro', price: 6990000 }, 2);
cart.addItem({ id: 1, name: 'iPhone 16', price: 25990000 }, 1);

cart.printCart();

cart.applyDiscount('SALE10');
console.log('\nSau giam 10%:');
cart.printCart();

console.log('So SP:', cart.getItemCount());
cart.removeItem(3);
console.log('Sau xoa:', cart.getItemCount());
