import ClickEvents from './ClickEvents.jsx'
import InputEvents from './InputEvents.jsx'
import KeyboardEvents from './KeyboardEvents.jsx'
import FormEvents from './FormEvents.jsx'

function Tier5Page() {
  return (
    <div>
      <h2>Tier 5 - Events co ban</h2>
      <section className="demo-block"><ClickEvents /></section>
      <section className="demo-block"><InputEvents /></section>
      <section className="demo-block"><KeyboardEvents /></section>
      <section className="demo-block"><FormEvents /></section>
    </div>
  )
}

export default Tier5Page
