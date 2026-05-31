function SimpleVariables() {
  const ten = 'Nguyen Van Da'
  const tuoi = 20
  const queQuan = 'Ha Noi'
  const laSinhVien = true
  const monHoc = ['HTML', 'CSS', 'JS', 'React']
  const canNang = 65
  const chieuCao = 1.7
  const bmi = (canNang / (chieuCao * chieuCao)).toFixed(1)

  const hour = new Date().getHours()
  const loiChao = hour < 12 ? 'Chao buoi sang' : hour < 18 ? 'Chao buoi chieu' : 'Chao buoi toi'

  return (
    <div style={{ padding: '20px' }}>
      <h3>Bai 2.1 - Bien don gian</h3>
      <h4>{loiChao} {ten}!</h4>
      <p>Tuoi: {tuoi}</p>
      <p>Nam sau: {tuoi + 1}</p>
      <p>Que quan: {queQuan}</p>
      <p>Sinh vien: {laSinhVien ? 'Co' : 'Khong'}</p>
      <p>BMI: {bmi}</p>
      <h4>Mon hoc:</h4>
      <p>{monHoc.join(', ')}</p>
    </div>
  )
}

export default SimpleVariables
