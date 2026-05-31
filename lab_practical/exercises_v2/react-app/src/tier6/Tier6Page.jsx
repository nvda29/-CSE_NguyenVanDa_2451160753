import ListBasics from './ListBasics.jsx'
import CreateItem from './CreateItem.jsx'
import DeleteItem from './DeleteItem.jsx'
import UpdateItem from './UpdateItem.jsx'

function Tier6Page() {
  return (
    <div>
      <h2>Tier 6 - Lists and CRUD</h2>
      <section className="demo-block"><ListBasics /></section>
      <section className="demo-block"><CreateItem /></section>
      <section className="demo-block"><DeleteItem /></section>
      <section className="demo-block"><UpdateItem /></section>
    </div>
  )
}

export default Tier6Page
