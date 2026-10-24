// Vite's React setup lets this file use JSX without importing React.
import StudentCard from './StudentCard' // Brings in the reusable student card.

function App() { // Defines the main component for this page.
  let name = "Shivam" // Saves a name so it can be shown on the page.

  return ( // Returns the page content that React should display.
    <div>
      {/* This outer div groups all the content on the page. */}
      {/* Curly braces put the JavaScript value of name into the JSX. */}
      <h1>hello world {name}</h1>

      {/* Each StudentCard is a component; these values are passed in as props. */}
      <StudentCard name="shivam" email="abc@gmail.com" />
      <StudentCard name="parul" email="cba@gmail.com" />

      {/* These prop names are different, so they appear in the Name2/Email2 fields. */}
      <StudentCard name2="monika" email2="xyz@gmail.com" />
    </div>
  )
}

export default App // Lets main.jsx import and display this component.

// Remember:
// A component is a reusable piece of a page. App and StudentCard are components.
// Props are values sent into a component. App sends name and email to StudentCard.
// JSX is the HTML-like code inside return that describes what React displays.
// This app uses React with Vite, not Next.js.
// Next.js is a React framework; it adds tools like page routing and server rendering.
