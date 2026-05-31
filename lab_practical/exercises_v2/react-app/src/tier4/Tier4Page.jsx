import NumberState from './NumberState.jsx'
import StringState from './StringState.jsx'
import BooleanState from './BooleanState.jsx'
import MultipleStates from './MultipleStates.jsx'

function Tier4Page() {
  return (
    <div>
      <h2>Tier 4 - useState co ban</h2>
      <section className="demo-block"><NumberState /></section>
      <section className="demo-block"><StringState /></section>
      <section className="demo-block"><BooleanState /></section>
      <section className="demo-block"><MultipleStates /></section>
    </div>
  )
}

export default Tier4Page
