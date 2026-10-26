// Import React so this file can define a React component.
import React from 'react'
// Import useState, a React tool for remembering a value that can change.
import { useState } from 'react'

// Create a component named App. A component is a function that returns part of a page.
function App() {
  // Start count at 0. useState gives us the current count and a function to change it.
  const [count, setCount] =useState(0);
  // count is the current value; setCount is the function used to update that value.

  // This function runs when the user clicks the button.
  function handleSubmit() {
    // Add 1 to the current count and ask React to show the new value.
    setCount(count + 1)
  }

  // Return the page elements that should appear on the screen.
  return (
    // The div groups the heading, count, and button together.
    <div>
      {/* Show the title at the top of the page. */}
      <h1>state management</h1>
      {/* Show the current count inside this heading. */}
      <h1 id='count'>{count}</h1>
      {/* Run handleSubmit when the user clicks this button. */}
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

// Make App available so another file can display this component.
export default App

// In simple terms, this file works like this:
// 1. React is a tool added to JavaScript that helps build pages.
// 2. App is a function that describes what should appear on the page.
// 3. useState(0) remembers the number, starting at zero.
// 4. count is the remembered number, and setCount is how we change it.
// 5. When the button is clicked, handleSubmit tells React to add one.
// 6. React then updates the number shown on the page.
// 7. The HTML-like tags inside return are JSX, a way to describe page elements in React.
// 8. export default lets another file use the App function.
