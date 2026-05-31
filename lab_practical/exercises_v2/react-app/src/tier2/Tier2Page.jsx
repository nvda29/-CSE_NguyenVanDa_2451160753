import SimpleVariables from './SimpleVariables.jsx'
import TernaryDemo from './TernaryDemo.jsx'
import AndDemo from './AndDemo.jsx'
import ListRendering from './ListRendering.jsx'

function Tier2Page() {
  return (
    <div>
      <h2>Tier 2 - Bien trong JSX</h2>
      <section className="demo-block"><SimpleVariables /></section>
      <section className="demo-block"><TernaryDemo /></section>
      <section className="demo-block"><AndDemo /></section>
      <section className="demo-block"><ListRendering /></section>
    </div>
  )
}

export default Tier2Page
