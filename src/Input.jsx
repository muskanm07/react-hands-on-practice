import { useState } from "react"


export default function Input(){
const [input,setInput]=useState("")


    return(
        <>
      <input  onChange={(e)=>setInput(e.target.value)}  type="text" placeholder="type here...."  />
      <h1>you type: {input}</h1>
            </>
    )
}