import { useState } from 'react'

function MultipleStates() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [isStudent, setIsStudent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const ageNum = Number(age)
  const ageValid = age === '' || (ageNum > 0 && ageNum < 100)

  function handleSubmit() {
    if (name.trim() === '' || age === '' || !ageValid) {
      alert('Vui long nhap day du thong tin hop le!')
      return
    }
    setSubmitted(true)
  }

  function handleReset() {
    setName('')
    setAge('')
    setEmail('')
    setIsStudent(false)
    setSubmitted(false)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 4.4 - Nhieu useState</h3>
      {!submitted ? (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label>Ten: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Tuoi: </label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            {!ageValid && <span style={{ color: 'red', marginLeft: '8px' }}>Tuoi 1-99</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              <input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />
              La sinh vien
            </label>
          </div>
          {name && <p>Xin chao {name}!</p>}
          <button type="button" onClick={handleSubmit}>Dang ky</button>
        </div>
      ) : (
        <div style={{ background: '#d4edda', padding: '15px', borderRadius: '8px' }}>
          <h4>Dang ky thanh cong!</h4>
          <p>Ten: {name}</p>
          <p>Tuoi: {age}</p>
          <p>Email: {email || '(khong co)'}</p>
          <p>Sinh vien: {isStudent ? 'Co' : 'Khong'}</p>
          <button type="button" onClick={handleReset}>Dang ky lai</button>
        </div>
      )}
    </div>
  )
}

export default MultipleStates
