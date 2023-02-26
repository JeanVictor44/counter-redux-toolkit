import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        
        <a target="_blank">
          <img src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React + Redux Toolkit</h1>
      <h2>0</h2>

      <div className="card">
        <button >
          Increment
        </button>
        <button >
          Decrement
        </button>
        <button>
          Reset
        </button>
      </div>

    </div>
  )
}

export default App
