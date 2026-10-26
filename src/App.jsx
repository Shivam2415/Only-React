import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] =useState(0);
  // whatever we have written at first positon it refers a current value
  //Second is used for upating the value of first one

  function handleSubmit() {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>state management</h1>
      <h1 id='count'>{count}</h1>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default App
