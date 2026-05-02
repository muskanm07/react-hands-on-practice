
// in react we uase jsx syntax means we can write html inside javacript
in react Component is a reusable piece of UI

// basic component
function Greeting() {
  return <h1>Hello Muskan!!</h1>
}

// use it anywhere!!
function App() {
  return (
    <>
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  )
}

and props means passing data to components child to parent

// component receives props
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age} years old!!</h1>
}

// pass props like HTML attributes!!
function App() {
  return (
    <>
      <Greeting name="Muskan" age={19} />
      <Greeting name="Priya" age={20} />
    </>
  )
}

const [value, setValue] = useState(initialValue)
//     ↑         ↑              ↑
//  current   function to    starting
//   value     update it      value