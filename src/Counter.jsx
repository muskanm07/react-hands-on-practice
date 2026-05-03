import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0)
 
     function negativeCount(){
        if(count>0){
          setCount(count-1);
        }else{   
           count=0
        }
     }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={negativeCount}>-</button>
         </>
    )
}