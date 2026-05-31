function processOrders(orders) {
  return orders
    .filter((order) => order.status === 'completed' && order.total > 100000)
    .map(({ id, customer, total }) => {
      const discount = total * 0.1;
      return {
        id,
        customer,
        total,
        discount,
        finalTotal: total - discount,
      };
    })
    .sort((a, b) => b.finalTotal - a.finalTotal);
}

const sampleOrders = [
  { id: 1, customer: 'An', status: 'completed', total: 150000 },
  { id: 2, customer: 'Binh', status: 'pending', total: 200000 },
  { id: 3, customer: 'Chi', status: 'completed', total: 50000 },
  { id: 4, customer: 'Dung', status: 'completed', total: 300000 },
];

console.log(processOrders(sampleOrders));
