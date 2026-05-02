export default function StudentList({name,marks}){

    return(
      <div className="students">
        <h3>{name}</h3>
        <p>{marks}</p>
      </div>
    )
}