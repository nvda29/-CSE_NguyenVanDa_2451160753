import { useState } from 'react'

function StringState() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const emailValid = email.includes('@')

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 4.2 - useState chuoi</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Ten: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhap ten..." />
        <span style={{ marginLeft: '8px' }}>{name.length}/100</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhap email..." />
        {email && <span style={{ marginLeft: '8px', color: emailValid ? 'green' : 'red' }}>
          {emailValid ? 'Email hop le' : 'Can co @'}
        </span>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Mat khau: </label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ marginLeft: '8px' }}>
          {showPassword ? 'An' : 'Hien'}
        </button>
      </div>
      {name && (
        <p style={{ background: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
          Xin chao <strong>{name}</strong>! Email: {email || '(chua nhap)'}
        </p>
      )}
    </div>
  )
}

export default StringState
