export default function MapMethod(){
  
    const fruits=["apple","banana","mango","orange","watermelon"]
     const students=[
        {name:"Muskan",marks:91},
        { name: "Priya", marks: 45 },
        { name: "Riya", marks: 72 }

     ]
    return(
        <>
        <ul>
            {fruits.map((fruit,index)=>(
              <li key={index}>{fruit}</li>
            ))}
        </ul>

        <>
        
            {students.map((student,index)=>(
                <div key={index} className="stu">
             <h3>{student.name}</h3>
             <h4>{student.marks}</h4>
              </div>
            ))}
           
        </>
        </>

    )
}