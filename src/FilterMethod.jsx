export default function FilterMethod(){

   const numbers=[1,2,3,4,5,6,7,8,9,10]

   const evenNumbers=numbers.filter((num)=>num%2==0)
   const oddNumbers=numbers.filter((num)=>(num%2!=0))
    return(
         <>
            {evenNumbers.map((num,index)=>(
          <li key={index}>{num}</li>
            ))}
           <br />
            {oddNumbers.map((num,index)=>(
                <li key={index}>{num}</li>
            ))}

          </>
    )
}