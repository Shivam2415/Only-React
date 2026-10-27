# LU 4.11: State with `useState`

## 1. What is state?

**State** is a component's personal memory. It holds information that can change while someone uses an app, such as a counter value, text typed into an input, or whether a menu is open.

### Why do we need state?

A plain JavaScript variable, such as `let count = 0`, can change in memory. However, changing that variable does not tell React to update what the user sees.

React updates the screen when a component re-renders. Calling a state setter tells React that the data changed, so React can render the component again with the new value.

## 2. Props vs. state

| Props | State |
| --- | --- |
| Data passed into a component, usually by its parent. | Data owned and managed by a component. |
| Read-only to the receiving component. | Can change over time using its setter. |

## 3. `useState` syntax

```tsx
const [value, setValue] = useState(initialValue);
```

- `value` is the current state value. Use it in JSX, for example: `<h1>{value}</h1>`.
- `setValue` is the setter function. Call it when you want to update the state.
- `useState(initialValue)` provides the initial value on the component's first render. React remembers the state on later renders.

## 4. Two golden rules for updating state

### Rule 1: Do not assign directly to a state variable

```tsx
// Incorrect: this does not ask React to update the screen.
count = count + 1;

// Correct: the setter asks React to update the state and re-render.
setCount(count + 1);
```

State variables are usually declared with `const`, so assigning a new value to one also causes an assignment error.

### Rule 2: Do not mutate objects or arrays

When updating an object or array, create a new copy and pass it to the setter. React uses the new value to determine whether it should render the update.

```tsx
setUser({ ...user, name: "New Name" });
```

The spread operator (`...`) copies the existing fields, and `name` is then set to the new value.

## 5. Code examples

### Example 1: Number and Boolean state

**File location:** `src/components/Counter.tsx`

```tsx
import React, { useState } from 'react';

export default function Counter() {
  // TypeScript infers that count is a number.
  const [count, setCount] = useState(0);

  // TypeScript infers that isVisible is a boolean.
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Count: {count}</h2>

      {/* Update the number with the state setter. */}
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
      <button onClick={() => setCount(count - 1)}>- Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      {/* Switch the boolean value between true and false. */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {/* Show the message only when isVisible is true. */}
      {isVisible && <p>Hello! This message visibility is controlled by state.</p>}
    </div>
  );
}
```

### Example 2: Object state with a TypeScript type

**File location:** `src/components/UserProfile.tsx`

```tsx
import React, { useState } from 'react';

// Describe the fields and value types in the user object.
type User = {
  name: string;
  role: string;
  age: number;
};

export default function UserProfile() {
  // The starting object lets TypeScript infer the User shape.
  const [user, setUser] = useState<User>({
    name: "Ada Lovelace",
    role: "Developer",
    age: 36
  });

  // Make a new object, keeping the old fields and changing the role.
  const handlePromote = () => {
    setUser({
      ...user,
      role: "Lead Architect"
    });
  };

  // Use the latest state value to calculate the new age.
  const handleBirthday = () => {
    setUser(prevUser => ({
      ...prevUser,
      age: prevUser.age + 1
    }));
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #0070f3', borderRadius: '8px' }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Age: {user.age}</p>

      <button onClick={handlePromote}>Promote User</button>
      <button onClick={handleBirthday}>Celebrate Birthday 🎉</button>
    </div>
  );
}
```

## 6. Quick reference

| Goal | Syntax example | Notes |
| --- | --- | --- |
| Import the hook | `import { useState } from 'react';` | Place it at the top of the file. |
| Declare string state | `const [name, setName] = useState("Alex");` | TypeScript infers `string`. |
| Declare explicitly typed state | `const [user, setUser] = useState<User \| null>(null);` | Useful when the state can be a `User` or `null`. |
| Update a number | `setCount(count + 1);` | Asks React to re-render with the updated value. |
| Update an object | `setUser({ ...user, name: "New Name" });` | Make a new object instead of changing the old one. |
| Toggle a Boolean | `setIsOpen(!isOpen);` | Changes `true` to `false`, or `false` to `true`. |
IMPORTANT QUESTIONS?
1.What does userState return?
Answer->In React, the useState hook returns an array with exactly two elements:

The current state value: On the initial render, this is the initial state value you passed into useState(). During subsequent re-renders, it's the most recent state value after any updates.

A state setter function: A function you call to update the state to a new value. Calling this function tells React to queue a re-render of the component with the new state.
Why an array?
Using array destructuring (const [state, setState] = ...) allows you to name the state variable and its setter function whatever you like, making it clean and intuitive to use multiple times in the same component.
