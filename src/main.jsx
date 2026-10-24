import { StrictMode } from 'react' // Helps find some problems while developing.
import { createRoot } from 'react-dom/client' // Connects React to the browser page.
import './index.css' // Loads the site's shared CSS styles.
import App from './App.jsx' // Brings in the main App component.

// Find the HTML element with id="root", then show the React app inside it.
createRoot(document.getElementById('root')).render(
  // StrictMode checks for common issues during development.
  <StrictMode>
    {/* App is the top-level component shown on the page. */}
    <App />
  </StrictMode>,
)

// Remember: main.jsx starts the React app inside the HTML element whose id is "root".
