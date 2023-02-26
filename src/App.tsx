import reactLogo from './assets/react.svg'
import './App.css'
import { appUseDispatch, appUseSelector } from './app/hooks'
import { selectCount } from './app/features/counterSlice'
import { counterActions } from './app/features/counterSlice'

function App() {
  const dispatch = appUseDispatch()
  const counter = appUseSelector(selectCount)

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
      <h2>{counter}</h2>

      <div className="card">
        <button onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(counterActions.decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(counterActions.reset())}>
          Reset
        </button>
      </div>

    </div>
  )
}

export default App
