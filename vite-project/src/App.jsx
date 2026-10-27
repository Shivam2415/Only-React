// Import the useState Hook, which lets this component remember a value between renders.
import { useState } from 'react'
// Define the App component, the function that returns the page's user interface.
function App() {
  // React event props connect user actions to functions; examples include onClick, onChange, and onSubmit.
  // Other event props include onInput, onKeyDown, onKeyUp, onFocus, onBlur, and mouse-event props.
  // The event prop name uses camelCase, and its value is a function for React to run when the event happens.
  // Create state named "text"; it starts as an empty string, and setText is the function that updates it.
  const [text, setText] = useState("");
  // Define the function that will run when the ShowAlert button is clicked.
  function handleClick() {
    // Show a browser alert box containing this message.
    alert('Hello React')
  }
  // Define the function that will run when the user changes the text input.
  // "p" is the event object React passes to this function; its name could also be "e".
  function handleChange(p) {
    // Read the input's current text from the event target and save it in state.
    // Updating state makes React render the component again with the latest text.
    setText(p.target.value);
  }
  // Define the function that will run when the ClearAll button is clicked.
  function handleClear() {
    // Replace the current state value with an empty string, clearing the input and heading.
    setText("");
  }
  // Return the JSX that describes what React should display on the page.
  return (
    // This div is the outer container holding all the elements returned by the component.
    <div>
      {/* This button listens for clicks; passing handleClick lets React call it after a click. */}
      <button onClick={handleClick}>ShowAlert</button>
      {/* This is a controlled input: its displayed value comes from state, and onChange updates that state. */}
      {/* The type attribute makes it a single-line text field; value={text} keeps it synced with state. */}
      {/* When the user types, React passes the change event to handleChange. */}
      <input type="text" value={text} onChange={handleChange} />
      {/* This button listens for clicks and calls handleClear, which resets the input's state. */}
      <button onClick={handleClear}>ClearAll</button>
      {/* Curly braces insert the current JavaScript state value into the displayed heading. */}
      <h1>{text}</h1>
      {/* Close the container that wraps the page elements. */}
    </div>
  );
}

// Make App available to other files, such as the file that starts the React application.
export default App
