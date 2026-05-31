import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProductCard from './components/ProductCard.jsx'
import UserCard from './components/UserCard.jsx'
import PriceTag from './components/PriceTag.jsx'

function Tier3Page() {
  const products = [
    { id: 1, name: 'iPhone 15', price: '25.000.000', image: 'https://placehold.co/200x150/6366f1/white?text=iPhone' },
    { id: 2, name: 'Samsung S24', price: '22.000.000', image: 'https://placehold.co/200x150/0ea5e9/white?text=S24' },
    { id: 3, name: 'Xiaomi 14', price: '15.000.000', image: 'https://placehold.co/200x150/22c55e/white?text=Xiaomi' },
  ]

  const users = [
    { id: 1, name: 'Nguyen Van Da', email: '2451160753@student.tlu.edu.vn', avatar: 'https://placehold.co/80x80/2563eb/white?text=NVDA' },
    { id: 2, name: 'Minh', email: 'minh@example.com', avatar: 'https://placehold.co/80x80/f59e0b/white?text=M' },
    { id: 3, name: 'An', email: 'an@example.com', avatar: 'https://placehold.co/80x80/ef4444/white?text=A' },
  ]

  return (
    <div>
      <h2>Tier 3 - Chia Component + Props</h2>
      <Header />
      <section className="demo-block" style={{ marginTop: '16px' }}>
        <h3>ProductCard</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
      <section className="demo-block">
        <h3>UserCard (Thu thach)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {users.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} avatar={user.avatar} />
          ))}
        </div>
      </section>
      <section className="demo-block">
        <h3>PriceTag (Thu thach)</h3>
        <PriceTag originalPrice={25990000} salePrice={23990000} />
        <PriceTag originalPrice={6990000} salePrice={6990000} />
      </section>
      <Footer />
    </div>
  )
}

export default Tier3Page
