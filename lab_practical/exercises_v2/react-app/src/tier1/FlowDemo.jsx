import { useState } from 'react'

function FlowDemo() {
  console.log('Component render!')

  const [step, setStep] = useState(1)

  return (
    <div style={{ padding: '20px', border: '2px solid #8b5cf6', borderRadius: '8px' }}>
      <h3>Luong hoat dong</h3>
      <p>Buoc hien tai: {step}</p>
      <button type="button" onClick={() => setStep(step + 1)}>Buoc tiep theo</button>
      <button type="button" onClick={() => setStep(1)} style={{ marginLeft: '8px' }}>
        Quay lai dau
      </button>
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
        {step === 1 && <p>Buoc 1: Xin chao!</p>}
        {step === 2 && <p>Buoc 2: Dang hoc React</p>}
        {step === 3 && <p>Buoc 3: Hieu useState</p>}
        {step >= 4 && <p>Buoc 4: Hoan thanh!</p>}
      </div>
    </div>
  )
}

export default FlowDemo
