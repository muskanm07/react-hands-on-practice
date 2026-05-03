import { useState } from "react"

export default function Todos(){
const [name,setName]=useState("")
 const[todos,setTodos]=useState([])
 const[Delete,setDelete]=useState([])

  const deleteTodo=(indexToDelete)=>{
   const updateList=todos.filter((_,index)=>index!==indexToDelete)
   setTodos(updateList)
   console.log(updateList)
  }
   const addTodos = () => {
  setTodos((todos) => [...todos, name]);
  setName("");
  console.log(name)
  console.log(todos)
};
 
  

    return(
   <>
        <h1>My ToDo List</h1>
        <input onChange={e=>setName(e.target.value)} type="text" placeholder="enter your task...." value={name} />
        <button onClick={addTodos}>Task</button>
        <ul >
           {todos.map((todo,index)=>(
            <div>
            <li key={index}>{todo}</li>
            <button onClick={deleteTodo}>delete</button>
            </div>
           ))}
        </ul>
  </>
    )
}