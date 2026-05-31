import { useState } from 'react'

function ClickEvents() {
  const [message, setMessage] = useState('Chua click')
  const [clickCount, setClickCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [boxColor, setBoxColor] = useState('#3498db')

  function handleClick() {
    setMessage(`Da click luc ${new Date().toLocaleTimeString()}`)
    setClickCount(clickCount + 1)
  }

  function handleReset() {
    setMessage('Da reset!')
    setClickCount(0)
  }

  function randomColor() {
    const colors = ['#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899']
    setBoxColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 5.1 - Click Events</h3>
      <p>{message}</p>
      <p>So lan click: {clickCount}</p>
      <button type="button" onClick={handleClick}>Click me!</button>
      <button type="button" onClick={handleReset} style={{ marginLeft: '8px' }}>Reset</button>
      <button type="button" onClick={() => { setIsLiked(!isLiked); setLikeCount(isLiked ? likeCount - 1 : likeCount + 1) }} style={{ marginLeft: '8px' }}>
        {isLiked ? 'Da thich' : 'Thich'} ({likeCount})
      </button>
      <div style={{ marginTop: '16px' }}>
        <div style={{ width: '120px', height: '80px', background: boxColor, borderRadius: '8px' }} />
        <button type="button" onClick={randomColor} style={{ marginTop: '8px' }}>Doi mau ngau nhien</button>
      </div>
    </div>
  )
}

export default ClickEvents
