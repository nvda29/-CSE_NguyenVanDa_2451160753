import { useState } from 'react'

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 },
  ])
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')
  const [savedMsg, setSavedMsg] = useState('')

  function startEdit(item) {
    setEditingId(item.id)
    setEditName(item.name)
    setEditAge(String(item.age))
  }

  function saveEdit() {
    if (editName.trim() === '' || editAge === '') return
    setItems(items.map((item) =>
      item.id === editingId ? { ...item, name: editName, age: parseInt(editAge, 10) } : item
    ))
    setEditingId(null)
    setSavedMsg('Da luu!')
    setTimeout(() => setSavedMsg(''), 2000)
  }

  function cancelEdit() {
    setEditingId(null)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') saveEdit()
    if (event.key === 'Escape') cancelEdit()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 6.4 - UPDATE</h3>
      {savedMsg && <p style={{ color: 'green' }}>{savedMsg}</p>}
      {items.map((item) => (
        <div key={item.id} style={{ padding: '10px', margin: '5px 0', background: editingId === item.id ? '#eff6ff' : '#f9f9f9' }}>
          {editingId === item.id ? (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <input value={editName} onChange={(e) => setEditName(e.target.value)} onKeyDown={handleKeyDown} autoFocus style={{ padding: '4px', border: '2px solid #2563eb' }} />
              <input type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} onKeyDown={handleKeyDown} style={{ padding: '4px', width: '60px' }} />
              <button type="button" onClick={saveEdit} style={{ background: '#27ae60', color: '#fff', border: 'none', padding: '4px 8px' }}>Luu</button>
              <button type="button" onClick={cancelEdit} style={{ background: '#95a5a6', color: '#fff', border: 'none', padding: '4px 8px' }}>Huy</button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.name} - {item.age} tuoi</span>
              <button type="button" onClick={() => startEdit(item)} style={{ background: '#3498db', color: '#fff', border: 'none', padding: '4px 8px' }}>Sua</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default UpdateItem
