const products = [
  { id: 1, name: 'iPhone 16', price: 25990000, category: 'phone', stock: 15, rating: 4.5 },
  { id: 2, name: 'MacBook Pro', price: 45990000, category: 'laptop', stock: 8, rating: 4.8 },
  { id: 3, name: 'AirPods Pro', price: 6990000, category: 'accessory', stock: 50, rating: 4.3 },
  { id: 4, name: 'iPad Air', price: 16990000, category: 'tablet', stock: 0, rating: 4.6 },
  { id: 5, name: 'Samsung S24', price: 22990000, category: 'phone', stock: 20, rating: 4.4 },
  { id: 6, name: 'Dell XPS 15', price: 35990000, category: 'laptop', stock: 5, rating: 4.7 },
  { id: 7, name: 'Galaxy Buds', price: 3490000, category: 'accessory', stock: 100, rating: 4.1 },
  { id: 8, name: 'Xiaomi Pad 6', price: 7990000, category: 'tablet', stock: 25, rating: 4.2 },
  { id: 9, name: 'Pixel 9', price: 19990000, category: 'phone', stock: 12, rating: 4.6 },
  { id: 10, name: 'ThinkPad X1', price: 32990000, category: 'laptop', stock: 3, rating: 4.5 },
];

function getInStock(list) {
  return list.filter((item) => item.stock > 0);
}

function filterProducts(list, category, minPrice, maxPrice) {
  return list.filter(
    (item) =>
      item.category === category &&
      item.price >= minPrice &&
      item.price <= maxPrice
  );
}

function sortByPrice(list, order = 'asc') {
  const sorted = [...list].sort((a, b) => a.price - b.price);
  return order === 'desc' ? sorted.reverse() : sorted;
}

function cheapestByCategory(list) {
  const categories = [...new Set(list.map((item) => item.category))];
  return categories.reduce((result, category) => {
    const cheapest = list
      .filter((item) => item.category === category)
      .sort((a, b) => a.price - b.price)[0];
    result[category] = cheapest;
    return result;
  }, {});
}

function totalInventoryValue(list) {
  return list.reduce((sum, item) => sum + item.price * item.stock, 0);
}

function formatProductList(list) {
  return list.map((item) => ({
    name: item.name,
    formattedPrice: item.price.toLocaleString('vi-VN') + 'd',
  }));
}

function averageRating(list) {
  if (list.length === 0) return 0;
  const total = list.reduce((sum, item) => sum + item.rating, 0);
  return total / list.length;
}

function searchProducts(list, keyword) {
  const key = keyword.toLowerCase();
  return list.filter((item) => item.name.toLowerCase().includes(key));
}

console.log('=== IN-STOCK PRODUCTS ===');
console.log(getInStock(products).map((item) => item.name));

console.log('\n=== PHONES 15-25 TRIEU ===');
console.log(filterProducts(products, 'phone', 15000000, 25000000).map((item) => item.name));

console.log('\n=== CHEAPEST BY CATEGORY ===');
console.log(cheapestByCategory(products));

console.log('\n=== TOTAL INVENTORY VALUE ===');
console.log(totalInventoryValue(products).toLocaleString('vi-VN') + 'd');

console.log('\n=== FORMAT LIST (3 SP dau) ===');
console.log(formatProductList(products).slice(0, 3));

console.log('\n=== AVERAGE RATING ===');
console.log(averageRating(products).toFixed(2));

console.log('\n=== SEARCH "pad" ===');
console.log(searchProducts(products, 'pad').map((item) => item.name));
