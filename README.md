# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## LU 4.11: State with `useState` — quick reminder

- **State** is a component's memory for values that can change. **Props** come from a parent and should be treated as read-only.
- A normal JavaScript variable can change, but React will not update the screen just because it changed. A state setter tells React to render the component again.
- In [`src/App.jsx`](./src/App.jsx), `const [count, setCount] = useState(0)` creates a counter that starts at `0`. `count` is its current value; `setCount` changes it.
- Clicking **Add** runs `handleSubmit`, which calls `setCount(count + 1)`. React then renders the new count shown as `{count}` in the heading.
- **Remember:** change state with its setter, never by assigning directly to the state variable. For objects and arrays, make a new copy instead of changing the old one.
- The `0` is the starting value used when the component first appears. React remembers the state on later renders. A setter requests an update; it does not change the current value immediately on the same line.
- This app uses JavaScript and JSX. TypeScript examples from the lesson (such as `useState<User | null>(null)`) add type information; they are not used in this project.
