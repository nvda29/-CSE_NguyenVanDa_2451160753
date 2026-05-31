function Header() {
  return (
    <header style={{ padding: '16px', background: '#1e293b', color: '#fff', borderRadius: '8px' }}>
      <h1 style={{ margin: '0 0 8px', fontSize: '20px' }}>Cua hang dien thoai</h1>
      <nav style={{ display: 'flex', gap: '16px' }}>
        <a href="#home" style={{ color: '#93c5fd' }}>Trang chu</a>
        <a href="#about" style={{ color: '#93c5fd' }}>Gioi thieu</a>
        <a href="#contact" style={{ color: '#93c5fd' }}>Lien he</a>
      </nav>
    </header>
  )
}

export default Header
