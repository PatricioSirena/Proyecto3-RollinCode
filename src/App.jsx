import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'><Navbar /></div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vamos de a poquito</h1>
      
      <div className='footer'>aqui va el footer<Footer /></div>


    </>
  )
}

export default App
