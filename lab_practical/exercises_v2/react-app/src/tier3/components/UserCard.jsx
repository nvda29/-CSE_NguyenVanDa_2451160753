function UserCard({ name, email, avatar }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '16px',
      width: '220px',
      textAlign: 'center',
    }}>
      <img src={avatar} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      <h3 style={{ margin: '8px 0 4px' }}>{name}</h3>
      <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{email}</p>
    </div>
  )
}

export default UserCard
