/**
 * Here’s a clear and simple note on **Props in React** that covers definition, usage, datatypes, and key points 👇  

---

# 📘 Props in React

## 🔹 Definition
- **Props** (short for *properties*) are inputs passed to React components.  
- They allow components to be **dynamic and reusable** by sending data from a parent component to a child component.  
- Props are **immutable** (read-only) inside the child component.

---

## 🔹 Why We Use Props
- To **share data** between components (parent → child).  
- To make components **reusable** with different values.  
- To **customize behavior or appearance** of components.  
- To keep components **stateless** and focused only on rendering.

---

## 🔹 How to Use Props
Props are passed like attributes in JSX:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

Here, `name="Alice"` is a prop passed to `Greeting`.

---

## 🔹 Props with Different Data Types
Props can hold **any JavaScript data type**:

| Data Type | Example Usage |
|-----------|---------------|
| **String** | `<Greeting name="Alice" />` → `props.name` = `"Alice"` |
| **Number** | `<Age value={25} />` → `props.value` = `25` |
| **Boolean** | `<Button disabled={true} />` → `props.disabled` = `true` |
| **Array** | `<List items={['A', 'B', 'C']} />` → `props.items` = `['A','B','C']` |
| **Object** | `<Profile user={{name:'John', age:30}} />` → `props.user` = `{name:'John', age:30}` |
| **Function** | `<Button onClick={handleClick} />` → `props.onClick` = function reference |
| **Component** | `<Layout header={<Header />} />` → `props.header` = `<Header />` |

---

## 🔹 Important Points to Remember
- Props are **read-only**: child components cannot modify them.  
- Use **defaultProps** to set default values when props are not provided.  
- Props help achieve **component reusability** and **separation of concerns**.  
- Props can be **destructured** for cleaner code:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

- Props differ from **state**:
  - **Props** → external, passed from parent, immutable.  
  - **State** → internal, managed within the component, mutable.  

---

✅ With this, you’ve got the **complete picture of props in React**: definition, purpose, usage with different datatypes, and all key points.  

Would you like me to also add a **visual diagram** showing how props flow from parent → child components? That could make it even easier to grasp.

 */