function TodoFilter({ filter, setFilter }) {
  const filters = [
    { key: 'all', label: 'Tat ca' },
    { key: 'active', label: 'Chua xong' },
    { key: 'completed', label: 'Hoan thanh' },
  ]

  return (
    <div style={{ display: 'flex', marginBottom: '15px', gap: '5px' }}>
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          onClick={() => setFilter(f.key)}
          aria-label={`Filter ${f.label}`}
          style={{
            flex: 1,
            padding: '8px',
            background: filter === f.key ? '#3498db' : '#f0f0f0',
            color: filter === f.key ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
