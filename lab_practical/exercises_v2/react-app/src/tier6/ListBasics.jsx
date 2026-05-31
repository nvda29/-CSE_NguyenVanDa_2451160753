import { useState } from 'react'

function ListBasics() {
  const [fruits] = useState(['Tao', 'Chuoi', 'Cam', 'Nho'])
  const [students] = useState([
    { id: 1, name: 'Minh', age: 20 },
    { id: 2, name: 'An', age: 21 },
    { id: 3, name: 'Linh', age: 19 },
  ])

  const avgAge = (students.reduce((s, st) => s + st.age, 0) / students.length).toFixed(1)

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 6.1 - Render danh sach</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      {students.map((student, index) => (
        <div key={student.id} style={{
          padding: '8px',
          margin: '5px 0',
          background: student.age >= 20 ? '#dcfce7' : '#f9f9f9',
        }}>
          {index + 1}. {student.name} - {student.age} tuoi
        </div>
      ))}
      <p>Tuoi trung binh: {avgAge}</p>
    </div>
  )
}

export default ListBasics
