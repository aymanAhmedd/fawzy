import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
    <Signup/>
    </>
  )
}

export default App
