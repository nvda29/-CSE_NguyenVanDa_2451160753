import { useState } from 'react'
import UserProfile from './tier0/UserProfile.jsx'
import ProductInfo from './tier0/ProductInfo.jsx'
import Tier1Page from './tier1/Tier1Page.jsx'
import Tier2Page from './tier2/Tier2Page.jsx'
import Tier3Page from './tier3/Tier3Page.jsx'
import Tier4Page from './tier4/Tier4Page.jsx'
import Tier5Page from './tier5/Tier5Page.jsx'
import Tier6Page from './tier6/Tier6Page.jsx'
import Tier7Page from './tier7/Tier7Page.jsx'

const TIERS = [
  { id: 0, label: 'Tier 0 - First Component' },
  { id: 1, label: 'Tier 1 - React Flow' },
  { id: 2, label: 'Tier 2 - JSX Variables' },
  { id: 3, label: 'Tier 3 - Component Split' },
  { id: 4, label: 'Tier 4 - useState' },
  { id: 5, label: 'Tier 5 - Events' },
  { id: 6, label: 'Tier 6 - Lists CRUD' },
  { id: 7, label: 'Tier 7 - Todo App' },
]

function Tier0Page() {
  return (
    <div>
      <h2>Tier 0 - Component dau tien</h2>
      <section className="demo-block">
        <h3>App co ban</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>
      <section className="demo-block">
        <UserProfile />
      </section>
      <section className="demo-block">
        <ProductInfo />
      </section>
    </div>
  )
}

const PAGES = {
  0: Tier0Page,
  1: Tier1Page,
  2: Tier2Page,
  3: Tier3Page,
  4: Tier4Page,
  5: Tier5Page,
  6: Tier6Page,
  7: Tier7Page,
}

function App() {
  const [activeTier, setActiveTier] = useState(0)
  const ActivePage = PAGES[activeTier]

  return (
    <div style={{ minHeight: '100vh' }}>
      <header style={{
        background: '#1e293b',
        color: '#fff',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '20px' }}>
          React Exercises v2 - Nguyen Van Da (2451160753)
        </h1>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {TIERS.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => setActiveTier(tier.id)}
              style={{
                padding: '6px 12px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                background: activeTier === tier.id ? '#2563eb' : '#334155',
                color: '#fff',
                fontSize: '13px',
              }}
            >
              {tier.label}
            </button>
          ))}
        </nav>
      </header>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px' }}>
        <ActivePage />
      </main>
    </div>
  )
}

export default App