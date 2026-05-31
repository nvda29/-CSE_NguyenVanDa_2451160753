function TernaryDemo() {
  const isLoggedIn = true
  const score = 85
  const isOnline = true
  const stock = 0

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 2.2 - Conditional (Ternary)</h3>
      <h4>{isLoggedIn ? 'Chao mung ban!' : 'Vui long dang nhap'}</h4>
      <p>Trang thai: {isOnline ? 'Online' : 'Offline'} {isOnline ? '🟢' : '🔴'}</p>
      <p>Ket qua: {score >= 5 ? 'Dau' : 'Rot'}</p>
      <p>Xep loai: {
        score >= 9 ? 'Xuat sac' :
        score >= 8 ? 'Gioi' :
        score >= 7 ? 'Kha' :
        score >= 5 ? 'Trung binh' : 'Yeu'
      }</p>
      <p>{stock === 0 ? 'Het hang' : `Con ${stock} san pham`}</p>
    </div>
  )
}

export default TernaryDemo
