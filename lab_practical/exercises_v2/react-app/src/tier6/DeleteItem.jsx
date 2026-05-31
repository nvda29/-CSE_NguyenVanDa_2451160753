import { useState } from 'react'

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: 'Minh' },
    { id: 2, name: 'An' },
    { id: 3, name: 'Linh' },
  ])
  const [lastDeleted, setLastDeleted] = useState(null)

  function handleDelete(id, name) {
    if (!window.confirm(`Xoa ${name}?`)) return
    setItems(items.filter((item) => item.id !== id))
    setLastDeleted(name)
    setTimeout(() => setLastDeleted(null), 3000)
  }

  function handleDeleteAll() {
    if (window.confirm('Xoa tat ca?')) setItems([])
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 6.3 - DELETE</h3>
      {lastDeleted && <p style={{ color: '#ef4444' }}>Da xoa {lastDeleted}</p>}
      {items.length > 0 && (
        <button type="button" onClick={handleDeleteAll} style={{ marginBottom: '10px', background: '#e74c3c', color: '#fff', border: 'none', padding: '8px 16px' }}>
          Xoa tat ca
        </button>
      )}
      {items.length === 0 ? (
        <p style={{ color: '#999' }}>Danh sach trong</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', margin: '5px 0', background: '#f9f9f9' }}>
            <span>{item.name}</span>
            <button type="button" onClick={() => handleDelete(item.id, item.name)} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '4px 8px' }}>Xoa</button>
          </div>
        ))
      )}
    </div>
  )
}

export default DeleteItem
