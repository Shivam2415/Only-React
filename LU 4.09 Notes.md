This Learning Unit (LU) covers **Components and JSX**, which are the fundamental building blocks of React and Next.js applications.

---

## 1. Core Concepts Explained Simply

### A. What is a Component?

A **component** is a reusable piece of your user interface (UI), written as a plain JavaScript function.

* **The Analogy:** Think of building with LEGO bricks. Instead of building a whole house in one piece, you build smaller parts (doors, windows, roof) and snap them together.
* **Three Key Rules for Components:**
1. **Capital Name:** The function name *must* start with a capital letter (e.g., `Header`, `ProfileCard`). React uses the capital letter to distinguish your custom components from standard HTML tags like `<div>` or `<p>`.
2. **Return Value:** It must return the UI (markup) you want to display on the screen.
3. **Exported:** You export it so it can be imported and used in other files.



### B. What is JSX?

**JSX** stands for JavaScript XML. It is the HTML-like code returned by a React component function. While it looks like standard HTML, it runs inside JavaScript and follows four main rules:

1. **Use `className` instead of `class`:** `class` is a reserved word in JavaScript, so React uses `className` for CSS classes.
2. **Return ONE root element:** A component must return a single top-level tag. If you have multiple elements, wrap them in a `<div>` or an empty fragment (`<> ... </>`).
3. **Self-close every tag:** Single/lonely tags that don't have closing tags in standard HTML must be closed in JSX (e.g., `<img />`, `<input />`, `<br />`).
4. **Use Curly Braces `{}` for JavaScript:** Wrapping an expression in `{}` lets you run real JavaScript inside your HTML markup (e.g., `{2 + 2}`, `{userName}`).

### C. What is Component Composition?

**Composition** means putting smaller components inside bigger ones to form a full web page. You use your components just like HTML tags (e.g., `<Header/>`, `<Footer/>`).

---

## 2. Complete Step-by-Step Code Example

Here is how you structure and combine components in a React/Next.js application.

### Step 1: Create a Reusable Component (`ProfileCard.js`)

*Where to put this:* Inside your project's `components/` directory (e.g., `components/ProfileCard.js`).

```jsx
// 1. Plain JavaScript function named with a Capital letter
export default function ProfileCard() {
  // JavaScript variable inside the component
  const name = "Ada Lovelace";
  const role = "Software Engineer";

  // 2. Return JSX markup
  return (
    // Rule: Single root element (div) and using className instead of class
    <div className="card">
      {/* Rule: Curly braces {} run JavaScript variables */}
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

```

### Step 2: Compose Components into a Page (`App.js` or `page.js`)

*Where to put this:* Inside your main page file (e.g., `src/App.js` or `app/page.js`).

```jsx
// Import your reusable component
import ProfileCard from "./ProfileCard";

// Helper header component
function Header() {
  return <h1>Team Directory</h1>;
}

// Helper footer component
function Footer() {
  return <p>© 2026 Kalvium Community</p>;
}

// Main App Component that composes everything together
export default function App() {
  return (
    // Single root wrapper element
    <div>
      {/* Using components like custom HTML tags */}
      <Header />
      
      {/* Reusing the same ProfileCard component multiple times */}
      <ProfileCard />
      <ProfileCard />

      <Footer />
    </div>
  );
}

```

---

## 3. Quick Reference Summary

| Concept | What It Means | Correct Example | Incorrect Example |
| --- | --- | --- | --- |
| Component naming | Starts with a capital letter | `function Button() {}` | `function button() {}` |
| CSS class attribute | Use `className` | `<div className="box">` | `<div class="box">` |
| Closing tags | Self-close standalone tags | `<img src="logo.png" />` | `<img src="logo.png">` |
| Embedding JavaScript | Use `{}` for expressions or variables | `<p>{2 + 2}</p>` (renders `4`) | `<p>2 + 2</p>` (renders the text `2 + 2`) |
| Root wrapper | Return one top-level element | `<> <h1></h1> <p></p> </>` | `<h1></h1> <p></p>` (two root elements) |
