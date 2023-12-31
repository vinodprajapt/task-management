import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Task Management</h1>
      <div className="card">
        <p>count = {count}</p>
        <Button label="Create New Task" variant={'success'} type={'submit'} handleClick={()=> setCount(count + 1)}/>
        <Button label="Cancel" variant={'primary'} type={'submit'}  handleClick={()=> setCount(count - 1)}/>
      </div>
    </>
  )
}

export default App
