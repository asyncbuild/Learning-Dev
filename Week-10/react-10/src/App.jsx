import { useState, useContext, createContext } from 'react'

const BulbContext = createContext();

export function BulbProvider( {children} ){
  const [bulbOn, setBulbOn] = useState(true);
    return <BulbContext.Provider value={
      {
        bulbOn : bulbOn,
        setBulbOn : setBulbOn
      }
    } >
      {children}
    </BulbContext.Provider>
}

function App() {
  return (
    <div>
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </div>
  )
}

function Light() {
  return (
  <div>
    <LightBulb />
    <LightSwitch />
  </div>
  )
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext)
    return( 
    <div>
      {bulbOn ? <p>The bulb is on</p> : <p>The bulb is off</p>}
    </div>
    )
}

function LightSwitch() {
  const {bulbOn,setBulbOn} = useContext(BulbContext)
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
