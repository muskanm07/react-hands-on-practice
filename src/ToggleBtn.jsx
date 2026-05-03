import { useState } from "react"

export default function ToggleBtn(){
 let [toggle,setToggle]=useState(false)

     let Toggle=()=>{
      setToggle(!toggle);
    }

    return(
        <>
        <h1 >{toggle?"hi muskan welcome there":""}</h1>
        <button onClick={Toggle}>{toggle?"hide":"show"}</button>

        </>
    )
}