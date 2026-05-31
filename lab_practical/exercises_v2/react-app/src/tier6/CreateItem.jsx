import { useState } from 'react'

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
  ])
  const [newName, setNewName] = useState('')
  const [message, setMessage] = useState('')

  function handleAdd() {
    if (newName.trim() === '') return
    setItems([...items, { id: Date.now(), name: newName }])
    setNewName('')
    setMessage('Da them thanh cong!')
    setTimeout(() => setMessage(''), 2000)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') handleAdd()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 6.2 - CREATE</h3>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nhap ten mon hoc..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button type="button" onClick={handleAdd}>Them</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <h4>Danh sach ({items.length} mon):</h4>
      {items.map((item) => (
        <div key={item.id} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item.name}</div>
      ))}
    </div>
  )
}

export default CreateItem
