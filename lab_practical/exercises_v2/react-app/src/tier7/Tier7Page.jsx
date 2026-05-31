import { useState } from 'react'
import TodoItem from './components/TodoItem.jsx'
import TodoFilter from './components/TodoFilter.jsx'

function Tier7Page() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')

  function addTodo() {
    if (inputValue.trim() === '') return
    setTodos([...todos, { id: Date.now(), text: inputValue, done: false }])
    setInputValue('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') addTodo()
  }

  function toggleTodo(id) {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.done
    if (filter === 'completed') return todo.done
    return true
  })

  const activeCount = todos.filter((todo) => !todo.done).length
  const completedCount = todos.filter((todo) => todo.done).length

  const placeholder = filter === 'active'
    ? 'Them viec chua xong...'
    : filter === 'completed'
      ? 'Them viec da xong...'
      : 'Nhap cong viec...'

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2>Tier 7 - Todo App</h2>
      <p style={{ color: '#64748b' }}>Nguyen Van Da - 2451160753</p>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label="New todo"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '4px 0 0 4px',
          }}
        />
        <button
          type="button"
          onClick={addTodo}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer',
          }}
        >
          Them
        </button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          {todos.length === 0 ? 'Chua co cong viec nao' : 'Khong co cong viec phu hop'}
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))
      )}

      {todos.length > 0 && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '15px',
          padding: '10px',
          background: '#f9f9f9',
          borderRadius: '4px',
        }}>
          <span>{activeCount} viec chua hoan thanh</span>
          <span style={{ color: '#666' }}>Tong: {todos.length} | Xong: {completedCount}</span>
        </div>
      )}
    </div>
  )
}

export default Tier7Page
