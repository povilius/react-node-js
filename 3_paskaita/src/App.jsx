// import { useState } from 'react'
// import Button from './components/Button'
// import './App.css'

// function App() {
//   const [state, setState] = useState(500)

//   return (
//     <div className='bank-wrapper'>
//         <h2>Withdraw</h2>
//       <div className='btns-wrapper'>
//         <Button onClick={() => setState(state - 10)}>10</Button>
//         <Button onClick={() => setState(state - 20)}>20</Button>
//         <Button onClick={() => setState(state - 50)}>50</Button>
//         <Button onClick={() => setState(state - 100)}>100</Button>
//       </div>

//       <h2>Enter</h2>
//       <div className='btns-wrapper'>
//         <Button onClick={() => setState(state + 10)}>10</Button>
//         <Button onClick={() => setState(state + 20)}>20</Button>
//         <Button onClick={() => setState(state + 50)}>50</Button>
//         <Button onClick={() => setState(state + 100)}>100</Button>
//       </div>

//       <Button onClick={() => setState(0)}>Withdraw All</Button>

//       <h3 style={{ fontSize: 24 }}>
//         Amount: {state}
//       </h3>

//     </div>
//   )
// }

// export default App


import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [state, setState] = useState(500)

  const createButtons = (increments, operator) => {
    return increments.map((increment) => (
      <Button key={increment} onClick={() => setState(state + operator * increment)}>
        {increment}
      </Button>
    ))
  }

  const withdrawalIncrements = [10, 20, 50, 100]
  const enterIncrements = [10, 20, 50, 100]

  return (
    <div className='bank-wrapper'>
      <h2>Withdraw</h2>
      <div className='btns-wrapper'>{createButtons(withdrawalIncrements, -1)}</div>

      <h2>Enter</h2>
      <div className='btns-wrapper'>{createButtons(enterIncrements, 1)}</div>

      <Button onClick={() => setState(0)}>Withdraw All</Button>

      <h3 style={{ fontSize: 24 }}>Amount: {state}</h3>
    </div>
  )
}

export default App
