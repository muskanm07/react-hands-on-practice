export default function ({name,role,skills,isAvailable}){
    
    return(
        <div className="card">
      <h3>{name}</h3>
      <h4>{role}</h4>
       <p>{skills}</p>
       <p>{isAvailable?"opent to work":"not available"}</p>
      </div>
    )
}