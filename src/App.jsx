import { useState } from 'react'
import './App.css'

function App() {
const [name, setName] = useState("Azizbek")
const [events, setEvents] = useState([
  {title: 'Azizbek web developer', id: 1},
  {title: 'xasanov web developer', id: 2},
  {title: 'hacker web developer', id: 3},
]);

const [showevents, setShowevents] = useState(true)

const headlick = () => {
  setName('Javohir')
}
const  hedeDelete = (id) => {
  setEvents((prev) => {
    return prev.filter((event) => {
      return event.id !== id
    })
  })
}
  return (
<div>
<div className="App">
  <h1>My name is {name}</h1>
  <button onClick={headlick}>click</button>
  <hr />
  <br />
  {showevents && <button onClick={() => {setShowevents(false)}}>hide event</button>}
  {!showevents && <button onClick={() => {setShowevents(true)}}>show events</button> }
{showevents && <div> 
  {events.length === 0 && <div> <h5>no items left</h5></div>}
  {
    events.map((event) => {
      return(
        <div key={event.id}>
          <h2> {event.title}</h2>
          <button onClick={() => hedeDelete(event.id)}>ochirish</button>
        </div>
      )
    })
  }
  </div>}
</div>
</div>
  )
}

export default App
