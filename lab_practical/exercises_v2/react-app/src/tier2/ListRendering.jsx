function ListRendering() {
  const fruits = ['Tao', 'Chuoi', 'Cam', 'Nho']

  const students = [
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 },
  ]

  const products = [
    { id: 1, name: 'iPhone 16', price: 25990000 },
    { id: 2, name: 'MacBook', price: 45990000 },
    { id: 3, name: 'AirPods', price: 6990000 },
    { id: 4, name: 'Case', price: 500000 },
    { id: 5, name: 'Charger', price: 1200000 },
  ]

  const totalPrice = products.reduce((sum, p) => sum + p.price, 0)

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 2.3 - List Rendering</h3>
      <h4>Trai cay</h4>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <h4>Sinh vien</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>STT</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Ten</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tuoi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>{'San pham (gia > 1 trieu mau do)'}</h4>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ color: product.price > 1000000 ? 'red' : 'inherit' }}
          >
            {product.name} - {product.price.toLocaleString('vi-VN')}d
          </li>
        ))}
      </ul>
      <p>
        <strong>Tong gia:</strong> {totalPrice.toLocaleString('vi-VN')}d
      </p>
    </div>
  )
}

export default ListRendering