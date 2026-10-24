import React from 'react'
import StudentCard from './StudentCard'

function App() {
  let name = "Shivam"
  return (
    <div>
      <h1>hello world {name}</h1>
      <StudentCard name="shivam" email="abc@gmail.com" />
      <StudentCard name="parul" email="cba@gmail.com" />
      <StudentCard name2="monika" email2="xyz@gmail.com" />
    </div>
  )
}

export default App
