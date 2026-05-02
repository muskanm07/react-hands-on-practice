# ⚛️ React Practice — Learning by Building

> *"Confidence doesn't come from watching lectures. It comes from DOING."*

>if you find this helpful in your journey please give ⭐

A personal React practice repository documenting my journey from **JavaScript fundamentals to React mastery** — one component at a time. 💪

---

## 👩‍💻 About This Repo

After completing JavaScript in 10 days, this is my React learning journey. Every file here represents real hands-on practice — no copy-paste, no shortcuts. Just genuine learning through building real things!!

**Started:** 2 May 2026
**Goal:** Master React and build full MERN stack projects 🎯
**Previous:** [JavaScript Practice](https://github.com/muskanm07/JavaScript-Practice) — 200+ unique cloners!!

---

## 📚 Topics Covered

### ✅ Completed

| Topic | Concepts |
|-------|---------|
| **Components** | Functional components, JSX, export/import |
| **Props** | Passing data, boolean props, array props, nested components |
| **useState** | Dynamic data, re-rendering, state management |

### 🔄 Coming Soon

- [ ] useEffect
- [ ] Fetch API in React
- [ ] Conditional Rendering
- [ ] Forms in React
- [ ] React Router
- [ ] Context API
- [ ] Custom Hooks

---

## 💡 Key Concepts

### Components — Reusable UI pieces!!

```jsx
// basic component
function Greeting({ name, city }) {
  return <h1>Hi I am {name} from {city}!!</h1>
}

// use it anywhere!!
<Greeting name="Muskan" city="Kanpur" />
<Greeting name="Priya" city="Delhi" />
```

### Props — Passing data!!

```jsx
// string prop
<Card title="iPhone" />

// number prop
<Card price={80000} />

// boolean prop
<Card isAvailable={true} />

// array prop
<Card skills={["React", "Node", "MongoDB"]} />

// inline style prop
<Button style={{ backgroundColor: "blue" }} />
```

### useState — Dynamic data!!

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}
```

### Important Rules!!

```jsx
// className not class!!
<div className="card">  ✅
<div class="card">      ❌

// camelCase events!!
onClick    ✅
onChange   ✅
onclick    ❌

// always add key in map!!
items.map((item) => (
  <Card key={item.id} title={item.title} />
))

// fragment - wrap multiple elements!!
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)

// curly braces for JS expressions!!
<h1>{name}</h1>
<h1>{2 + 2}</h1>
<h1>{isTrue ? "Yes" : "No"}</h1>
```

---

## 🏋️ Exercises Completed

### Components + Props
- [x] Basic Hello component
- [x] UserCard with name and city props
- [x] ProductCard with name and price
- [x] SkillList with array prop
- [x] StatusBadge with boolean prop
- [x] Header, About, Footer components
- [x] Reusable MyButton with color prop
- [x] ProfileCard with multiple props
- [x] StudentList with array of objects
- [x] Nested components!!

### useState
- [ ] Counter with +/-
- [ ] Toggle show/hide
- [ ] Live input preview
- [ ] Random color changer
- [ ] Like button
- [ ] Todo list
- [ ] Form with validation
- [ ] Calculator
- [ ] Shopping cart
- [ ] Quiz app

---

## 📅 Daily Log

| Day | Date | Topics | Hours |
|-----|------|--------|-------|
| Day 1 | May 2026 | Components, Props, JSX basics | 4 hrs |

---

## 🛠️ How to Run

```bash
# Clone the repo
git clone https://github.com/muskanm07/React-Practice.git

# Install dependencies
cd React-Practice
npm install

# Start dev server
npm run dev

# Open browser
# http://localhost:5173
```

---

## 🌱 My Other Projects

- 📝 [JavaScript Practice](https://github.com/muskanm07/JavaScript-Practice) — 82+ unique cloners!!
- 🥘 [Pantry Tracker](https://github.com/muskanm07/Pantry-Tracker)
- 🎮 [Simon Says Game](https://github.com/muskanm07/Simon-Says-Game)

---

## 📬 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/muskan-maurya-1344202b2/)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/muskanm07)
📧 muskanmaurya553@gmail.com

---

⭐ If this repo helped you — drop a star!! It means a lot!! 🙏

*Made with 💙 and cold coffee!! ☕🔥*
*JS Practice got 200+ unique cloners — let's see how far React goes!!* 😄
