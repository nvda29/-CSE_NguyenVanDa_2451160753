import { useState } from 'react'

function KeyboardEvents() {
  const [lastKey, setLastKey] = useState('')
  const [log, setLog] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [darkBg, setDarkBg] = useState(false)

  function handleKeyDown(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'd') {
      event.preventDefault()
      setDarkBg(!darkBg)
      return
    }

    setLastKey(event.key)
    setLog((prev) => [...prev.slice(-4), event.key])

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault()
      setPos((p) => ({
        x: event.key === 'ArrowLeft' ? Math.max(0, p.x - 10) : event.key === 'ArrowRight' ? Math.min(200, p.x + 10) : p.x,
        y: event.key === 'ArrowUp' ? Math.max(0, p.y - 10) : event.key === 'ArrowDown' ? Math.min(120, p.y + 10) : p.y,
      }))
    }
  }

  function handleInputKeyDown(event) {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      alert(`Ban nhap: ${inputValue}`)
      setInputValue('')
    }
    if (event.key === 'Escape') setInputValue('')
  }

  return (
    <div
      style={{ padding: '20px', background: darkBg ? '#1e293b' : '#fff', color: darkBg ? '#fff' : '#000', borderRadius: '8px' }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h3>Bai 5.3 - Keyboard Events</h3>
      <p>Phim cuoi: <strong>{lastKey || 'Chua nhan'}</strong></p>
      <p>Log: {log.join(' -> ')}</p>
      <p>Ctrl+D: doi mau nen | Mui ten: di chuyen o vuong</p>
      <div style={{
        position: 'relative',
        width: '220px',
        height: '140px',
        border: '1px dashed #94a3b8',
        margin: '12px 0',
      }}>
        <div style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
          width: '30px',
          height: '30px',
          background: '#2563eb',
          borderRadius: '4px',
        }} />
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Nhap roi nhan Enter..."
        style={{ padding: '8px', width: '300px' }}
      />
      <p style={{ fontSize: '12px', color: '#666' }}>Escape de xoa input</p>
    </div>
  )
}

export default KeyboardEvents
