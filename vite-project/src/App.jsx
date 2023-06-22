import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockDisplay from './Component/Lab1/ClockDisplay'
import ActivityFinder from './Component/ActivityFinder'
import RefCounter from './Component/RefCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ClockDisplay/> */}
     {/* <ActivityFinder/> */}
     <RefCounter/>
      
      
    </>
  )
}

export default App
