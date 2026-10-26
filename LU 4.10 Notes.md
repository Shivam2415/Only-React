This Learning Unit (LU) covers **Props (Typed)** in React and TypeScript.

While components are like template bricks, **props** (short for properties) allow you to pass custom data into them so that one component can display different information each time it is used. TypeScript adds type-checking to ensure you pass the right data every time.

---

## 1. Core Concepts Explained Simply

### A. What are Props?

* Props are **arguments passed into a React component** via HTML-like tag attributes (e.g., `<ProfileCard name="Ada"/>`).
* React collects these attributes into a single object (`props`) and passes it into your component function.
* **One-way flow:** Props flow down from parent to child components. They are **read-only**—the child component reads props but must never modify them.
* **Destructuring:** Instead of writing `props.name`, you unpack values directly in the function arguments: `function ProfileCard({ name })`.

### B. Why Type Props with TypeScript?

Without types, passing the wrong data type, forgetting a required field, or misspelling a prop name (like `naem` instead of `name`) only causes errors when the app runs.

TypeScript lets you define a `type` for your props object (`type Props = { ... }`). If you make a mistake, your editor highlights it with a red underline instantly before running the code.

### C. Types of Props & Passing Rules

1. **Strings:** Pass them directly using quotes: `title="Hello"`.
2. **Numbers, booleans, objects, and arrays:** Wrap them in curly braces (`{}`), for example `count={3}` or `active={true}`.
3. **Optional Props (`?`):** Putting a `?` after a property name makes it optional (e.g., `subtitle?: string`). You can set default values in the destructuring assignment.

---

## 2. Complete Step-by-Step Code Example

### Step 1: Define and Type the Component (`ProfileCard.tsx`)

* **Where to put this:** Create a file named `ProfileCard.tsx` in your `src/components/` folder.

```tsx
import React from "react";

// 1. Define the TypeScript type for the incoming props
type ProfileCardProps = {
  name: string;
  role: string;
  age: number;
  isOnline: boolean;
  bio?: string;
};

export default function ProfileCard({
  name,
  role,
  age,
  isOnline,
  bio = "No biography available.",
}: ProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <h2>
        {name} ({age})
      </h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>
        <strong>Status:</strong> {isOnline ? "🟢 Online" : "🔴 Offline"}
      </p>
      <p>
        <strong>Bio:</strong> {bio}
      </p>
    </div>
  );
}
```

---

### Step 2: Pass Props from the Parent Component (`App.tsx` or `page.tsx`)

* **Where to put this:** Inside your main page or application component (e.g., `src/App.tsx` or `app/page.tsx`).

```tsx
import React from "react";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div>
      <h1>Team Directory</h1>

      <ProfileCard
        name="Ada Lovelace"
        role="Software Engineer"
        age={36}
        isOnline={true}
        bio="Pioneer of computer programming."
      />

      <ProfileCard
        name="Grace Hopper"
        role="Computer Scientist"
        age={85}
        isOnline={false}
      />
    </div>
  );
}

```

---

## 3. Quick Reference Summary

| Prop type | Type definition | How to pass it | Example |
| --- | --- | --- | --- |
| String | `title: string;` | Use quotes | `title="Hello"` |
| Number | `age: number;` | Use curly braces (`{}`) | `age={36}` |
| Boolean | `active: boolean;` | Use curly braces (`{}`) | `active={true}` |
| Optional | `subtitle?: string;` | May be omitted | `<Card title="Hi" />` (uses the default value) |

---

### What to Do Where

1. **In `ProfileCard.tsx`:** Define a props type near the top of the file to specify the data the card requires, then annotate the component parameter with that type.
2. **In `App.tsx`:** Import `ProfileCard` and pass values as attributes on the component tag, such as `<ProfileCard age={36} name="Ada Lovelace" />`.
