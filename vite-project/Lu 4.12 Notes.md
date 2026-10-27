# Learning Unit 4.12: Event Handling & Forms

## The Core Idea

In React, **events** are actions triggered by the user, such as clicks, keystrokes, and form submissions. **Event handlers** are functions that run in response to those actions.

**Controlled inputs** keep React state as the single source of truth for what appears in an input.

## 1. Event Handling: Responding to Actions

### What is an event?

An event is a user interaction, such as:

- Clicking: `onClick`
- Typing or changing an input: `onChange`
- Hovering: `onMouseEnter`

### The golden rule: Pass the function; do not call it

Pass a function reference to React so React can run it when the event happens.

```jsx
// Correct: React calls handleClick after the button is clicked.
<button onClick={handleClick}>Click me</button>

// Incorrect: handleClick runs immediately while the page renders.
<button onClick={handleClick()}>Click me</button>
```

To pass an argument, use an arrow function:

```jsx
<button onClick={() => handleClick(id)}>Delete</button>
```

### The event object

React passes an event object (often named `e`) to the event handler. It contains information about the event.

For example, `e.target.value` reads the current text in an input:

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

## 2. Controlled Inputs: State as the Source of Truth

A **controlled input** is an input whose displayed value is set by React state.

It needs two things:

1. `value={name}` tells the input to display the value stored in state.
2. `onChange={(e) => setName(e.target.value)}` updates state when the user types.

### Example: One controlled input

```jsx
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Current state: {name}</p>
    </div>
  );
}
```

## 3. Forms and Submissions

### Listen for submission

Put `onSubmit` on the `<form>` element. Use a submit button inside the form:

```jsx
<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

### Stop the browser's page reload

By default, submitting an HTML form can refresh the page. Call `e.preventDefault()` in the submit handler to stop that default behavior and let React handle the submission.

### Example: A form with multiple fields in one state object

When a form has several fields, you can store their values in one object. Use the spread operator (`...`) to copy the existing fields when updating one value.

```jsx
import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleChange(e) {
    // Update the field whose name matches the input's name attribute.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 30-Second Cheat Sheet

| Concept | Syntax or pattern | Purpose |
| --- | --- | --- |
| Click event | `onClick={handleClick}` | Runs `handleClick` when the element is clicked. |
| Pass an argument | `onClick={() => handleDelete(id)}` | Waits for the click, then calls the function with an argument. |
| Read input text | `e.target.value` | Gets the text currently entered in the input. |
| Controlled input | `value={state}` and `onChange={...}` | Keeps the input and React state in sync. |
| Prevent page reload | `e.preventDefault()` | Stops the browser's default form submission behavior. |

## Revision Practice: Self-Test

### Question 1: Event handling

What happens when this code renders?

```jsx
<button onClick={console.log("Button clicked!")}>Click Me</button>
```

- **A)** Nothing happens until the user clicks the button.
- **B)** `"Button clicked!"` is logged immediately during rendering, and the click does not have a handler function.
- **C)** React throws a syntax error.

### Question 2: Controlled components

Assume `text` is initialized to `"Hello"` with `useState("Hello")`, and there is no `onChange` prop. What happens when the user tries to type here?

```jsx
<input value={text} />
```

- **A)** The typed characters appear normally.
- **B)** The input clears immediately.
- **C)** The input remains `"Hello"` because its value is controlled by state, and nothing updates that state.

### Question 3: Form submission

Why is `e.preventDefault()` important in a React form submit handler?

- **A)** It sends form data directly to the server.
- **B)** It stops the browser's default page refresh so React can handle the submission.
- **C)** It automatically validates the form fields.

## Answers and Explanations

1. **B** — `console.log(...)` runs immediately when the JSX is evaluated. Pass a function instead, for example `onClick={() => console.log("Button clicked!")}`.
2. **C** — `value={text}` makes the input display the state value. Without an `onChange` handler that updates state, typing cannot change that value.
3. **B** — `e.preventDefault()` stops the browser's default form refresh so the React app can handle the submitted data.
