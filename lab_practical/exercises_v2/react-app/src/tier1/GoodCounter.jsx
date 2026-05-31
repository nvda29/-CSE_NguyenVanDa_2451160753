import { useState } from 'react'

function GoodCounter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div style={{ padding: '20px', border: '2px solid #22c55e', borderRadius: '8px' }}>
      <h3>Counter tot (useState)</h3>
      <p>Bo dem: {count}</p>
      <button type="button" onClick={handleClick}>Tang (+1)</button>
      <p style={{ color: 'green' }}>
        Nhan nut — so tren man hinh CAP NHAT!
      </p>
    </div>
  )
}

export default GoodCounter
