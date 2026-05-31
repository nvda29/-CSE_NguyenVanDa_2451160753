import LifecycleDemo from './LifecycleDemo.jsx'
import BadCounter from './BadCounter.jsx'
import GoodCounter from './GoodCounter.jsx'
import FlowDemo from './FlowDemo.jsx'

function Tier1Page() {
  return (
    <div>
      <h2>Tier 1 - Hieu luong hoat dong React</h2>
      <section className="demo-block">
        <LifecycleDemo />
      </section>
      <section className="demo-block">
        <BadCounter />
      </section>
      <section className="demo-block">
        <GoodCounter />
      </section>
      <section className="demo-block">
        <FlowDemo />
      </section>
    </div>
  )
}

export default Tier1Page