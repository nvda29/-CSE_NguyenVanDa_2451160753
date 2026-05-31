function UserProfile() {
  return (
    <div className="profile">
      <h3>Ho so ca nhan</h3>
      <img
        src="https://placehold.co/120x120/2563eb/white?text=NVDA"
        alt="Anh dai dien"
        width="120"
        height="120"
        style={{ borderRadius: '50%' }}
      />
      <table>
        <tbody>
          <tr>
            <td>Ho ten:</td>
            <td>Nguyen Van Da</td>
          </tr>
          <tr>
            <td>MSSV:</td>
            <td>2451160753</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>2451160753@student.tlu.edu.vn</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserProfile