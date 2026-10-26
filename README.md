# React Student Cards

This is a small React project built with Vite. It shows a page with a greeting and student cards. The example is useful for learning how React components are put together and how data is passed to a component with props.

> This repository uses **React, JavaScript, and Vite**. It is not a Next.js or TypeScript project. The ideas from the learning unit still apply: the page is made of components, JSX describes the UI, and props carry data into a component. Next.js and TypeScript are not configured here.

## Getting started

You need Node.js and npm installed.

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open the local address printed in the terminal, usually `http://localhost:5173`.

Vite updates the page as you edit and save files. To stop the server, press `Ctrl+C` in its terminal.

## Project files

```text
.
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── StudentCard.jsx
    ├── App.css
    ├── index.css
    └── assets/
        ├── hero.png
        ├── react.svg
        └── vite.svg
```

### Application code

- **`src/main.jsx`** is the browser entry point. It imports the global stylesheet and `App`, finds the HTML element with the ID `root`, and asks React to render the app there. `StrictMode` helps reveal some problems during development.
- **`src/App.jsx`** is the page component. It sets a name for the greeting and uses `StudentCard` three times.
- **`src/StudentCard.jsx`** defines the reusable student-card component. It reads values from `props`, displays them, and conditionally displays an email when `email2` has a value.
- **`src/index.css`** is where global styles can go. It is currently empty.
- **`src/App.css`** is available for styles specific to the app. It is currently empty.
- **`src/assets/`** contains image files that can be imported by source code. The hero image and React/Vite logos are not currently used by the app.

### HTML, assets, and configuration

- **`index.html`** is the HTML page Vite serves. Its `<div id="root"></div>` is the place where React puts the app, and its module script loads `src/main.jsx`. It also sets the page title and favicon.
- **`public/favicon.svg`** is the favicon referenced by `index.html`. Files in `public/` are served as-is, rather than imported into JavaScript.
- **`public/icons.svg`** is another publicly served SVG asset. It is not currently referenced by the app.
- **`package.json`** describes the project, its dependencies, and its npm scripts.
- **`package-lock.json`** records the exact dependency versions npm resolved. Keep it in the repository so installs are consistent.
- **`vite.config.js`** configures Vite and enables its React plugin, which supports React and JSX during development and builds.
- **`eslint.config.js`** configures ESLint to check JavaScript and JSX, including React Hooks and React Refresh rules.
- **`.gitignore`** tells Git to leave generated files and local-only files such as `node_modules`, `dist`, and logs untracked.
- **`dist/`** is the generated production build output, and **`node_modules/`** contains installed packages. Both are created locally and are not source files to edit.
- **`README.md`** (this file) explains how to run the project and what its files do.

## How the React code works

### 1. React starts the app

In `src/main.jsx`, `createRoot` connects React to the `root` element in `index.html`:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`<App />` is JSX syntax for rendering the `App` component. React starts with that component and renders the elements it returns.

### 2. The page composes components

`src/App.jsx` returns a heading and several `StudentCard` components:

```jsx
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
```

The curly braces in `{name}` put the JavaScript value into the heading. Each `<StudentCard />` reuses the same component with different prop values.

### 3. A component reads its props

`src/StudentCard.jsx` receives the props object and uses its fields in JSX:

```jsx
function StudentCard(props) {
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "2px" }}>
        <h1>Name {props.name}</h1>
        <h3>Email {props.email}</h3>
        <h4>Name2 {props.name2}</h4>
        {props.email2 && <h5>Email2 {props.email2}</h5>}
      </div>
    </div>
  )
}
```

The `style` prop takes a JavaScript object, which is why it uses double braces: the outside braces enter JavaScript, and the inside braces create the style object. The `&&` expression renders the email heading only when `email2` is present.

**Note about the third card:** its attributes are named `name2` and `email2`, while the first two cards use `name` and `email`. The component reads both sets, so the third card will not show its values under the same Name and Email headings as the first two. Use consistent prop names when each card should have the same shape. This README describes the code as it currently exists; it does not change the app.

The component also logs its props with `console.log(props)`. You can see those values in the browser's developer console.

## Available commands

Run these from the project folder:

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds an optimized version of the app into `dist/`. |
| `npm run preview` | Serves the production build locally for a preview. Run `npm run build` first. |
| `npm run lint` | Runs ESLint to check the project files. |

## Connection to the learning unit

- **Components:** `App` and `StudentCard` are functions that return JSX.
- **JSX:** the markup-like syntax describes what React should display; `{name}` embeds a JavaScript value.
- **Composition:** `App` builds a page by placing `StudentCard` components inside its returned markup.
- **Props:** values such as `name="shivam"` and `email="abc@gmail.com"` are passed from `App` to `StudentCard`.
- **Next.js and TypeScript:** the learning unit introduces these tools, but this repository does not use them. It is a Vite project written in `.jsx` JavaScript files.
Deeper dive into type vs. interface

How to type complex props like functions, arrays, or objects

Hands-on TypeScript coding exercises on React props
