function LifecycleDemo() {
  console.log('1 Component duoc goi!')

  return (
    <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '8px' }}>
      <h3>Lifecycle Demo</h3>
      <p>Mo Console (F12) de xem log</p>
      <p>Component nay render — trong StrictMode co the thay log 2 lan khi dev</p>
    </div>
  )
}

export default LifecycleDemo
