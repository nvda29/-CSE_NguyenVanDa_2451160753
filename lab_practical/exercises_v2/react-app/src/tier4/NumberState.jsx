import { useState } from 'react'

function NumberState() {
  const [count, setCount] = useState(0)

  const countColor = count > 0 ? '#22c55e' : count < 0 ? '#ef4444' : '#0f172a'
  const countLabel = count > 0 ? 'So duong' : count < 0 ? 'So am' : 'Bang 0'

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>Bai 4.1 - useState so</h3>
      <h2 style={{ color: countColor }}>Bo dem: {count}</h2>
      <p>{countLabel}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        <button type="button" onClick={() => setCount(count + 1)}>Tang (+1)</button>
        <button type="button" onClick={() => setCount(count + 5)}>Tang 5</button>
        <button type="button" onClick={() => setCount(count - 1)}>Giam (-1)</button>
        <button type="button" onClick={() => setCount(0)}>Reset</button>
        <button type="button" onClick={() => setCount(count * 2)}>Nhan doi</button>
      </div>
    </div>
  )
}

export default NumberState
