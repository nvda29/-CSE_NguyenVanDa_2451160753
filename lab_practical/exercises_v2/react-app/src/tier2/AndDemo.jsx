function AndDemo() {
  const hasNotification = true
  const notificationCount = 5
  const isLoggedIn = true

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 2.2 - Conditional (&&)</h3>
      {hasNotification && (
        <div style={{ background: '#fff3cd', padding: '10px', borderRadius: '8px' }}>
          Ban co {notificationCount} thong bao moi!
        </div>
      )}
      {!hasNotification && <p>Khong co thong bao</p>}
      {isLoggedIn && (
        <nav style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
          <a href="#home">Trang chu</a>
          <a href="#profile">Ho so</a>
          <a href="#logout">Dang xuat</a>
        </nav>
      )}
    </div>
  )
}

export default AndDemo
