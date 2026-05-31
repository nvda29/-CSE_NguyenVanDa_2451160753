function UserProfile() {
  return (
    <div className="profile">
      <h1>Ho so ca nhan</h1>
      <img
        src="https://via.placeholder.com/120x120?text=Avatar"
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
            <td>Email:</td>
            <td>2451160753@student.tlu.edu.vn</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserProfile
