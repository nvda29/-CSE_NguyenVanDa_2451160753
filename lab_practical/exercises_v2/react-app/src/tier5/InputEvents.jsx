import { useState } from 'react'

function InputEvents() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const charCount = text.length
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const emailValid = email.includes('@')

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 5.2 - Input Events</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhap gi do..."
        maxLength={100}
        style={{ padding: '8px', width: '300px', display: 'block', marginBottom: '8px' }}
      />
      <p>Ky tu: {charCount}/100 | Tu: {wordCount}</p>
      <p>Ban dang nhap: {text}</p>
      {charCount > 80 && <p style={{ color: 'red' }}>Sap het ky tu!</p>}
      <hr />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email..."
        style={{ padding: '8px', width: '300px' }}
      />
      {email && (
        <p style={{ color: emailValid ? 'green' : 'red' }}>
          {emailValid ? 'Email hop le' : 'Email phai co @'}
        </p>
      )}
    </div>
  )
}

export default InputEvents
