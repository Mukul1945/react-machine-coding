import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Counter App</h1>
     {count}
     <br/>
     <br/>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <button onClick={()=>setCount(count-1)}>Decrement</button>
     <button onClick={()=>setCount(0)}>Reset</button>
   </>
  )
}

export default App
