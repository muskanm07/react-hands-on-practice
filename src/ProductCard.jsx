export default function ProductCard({title,price}){
    return(
      <div className="ProductCard">
       
            <h2>{title}</h2>
            <p>{price}</p>
      </div>
    )
    }