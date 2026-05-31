import UserProfile from './UserProfile.jsx'
import ProductInfo from './ProductInfo.jsx'

function App() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Nguyen Van Da - Tier 0 React</h1>
      <p>Component dau tien - hoc React buoc 1</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <hr />
      <UserProfile />
      <ProductInfo />
    </div>
  )
}

export default App
