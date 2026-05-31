import { useState } from 'react'

function FormEvents() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    const next = { ...formData, [name]: value }
    setFormData(next)

    const nextErrors = { ...errors }
    if (name === 'email') nextErrors.email = value.includes('@') ? '' : 'Email phai co @'
    if (name === 'confirmPassword') nextErrors.confirmPassword = value === next.password ? '' : 'Mat khau khong khop'
    setErrors(nextErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Nhap ten'
    if (!formData.email.includes('@')) newErrors.email = 'Email khong hop le'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Mat khau khong khop'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    setSubmitted(true)
  }

  function handleReset() {
    setFormData({ name: '', email: '', password: '', confirmPassword: '', message: '' })
    setSubmitted(false)
    setErrors({})
  }

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 5.4 - Form Events</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Ten: </label>
            <input name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <span style={{ color: 'red' }}> {errors.name}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email: </label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <span style={{ color: 'red' }}> {errors.email}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Mat khau: </label>
            <input name="password" type="password" value={formData.password} onChange={handleChange} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Xac nhan: </label>
            <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span style={{ color: 'red' }}> {errors.confirmPassword}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Tin nhan: </label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={3} style={{ width: '100%' }} />
          </div>
          <button type="submit">Gui</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: '8px' }}>Xoa</button>
        </form>
      ) : (
        <div style={{ background: '#d4edda', padding: '15px', borderRadius: '8px' }}>
          <h4>Da gui thanh cong!</h4>
          <p>Ten: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Tin nhan: {formData.message}</p>
          <button type="button" onClick={handleReset}>Gui lai</button>
        </div>
      )}
    </div>
  )
}

export default FormEvents
