import { useState } from 'react'
function App() {

  return (
    <div>
      <LightBulb/>
    </div>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true) 
  return (
  <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
  )
}

function BulbState({ bulbOn }){
    return( 
    <div>
      {bulbOn ? <p>The bulb is on</p> : <p>The bulb is off</p>}
    </div>
    )
}

function ToggleBulbState({bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn)
  }
  return(
  <div>
    <button type="button" onClick={toggle}>Toggle the bulb</button>
  </div>
  )
}

export default App
