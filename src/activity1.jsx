export default function Activity(){
const products = [
  { id: 1, name: "iPhone", price: 80000, inStock: true },
  { id: 2, name: "Samsung", price: 45000, inStock: false },
  { id: 3, name: "OnePlus", price: 35000, inStock: true },
  { id: 4, name: "Pixel", price: 60000, inStock: true }
]

  const isInStock=products.filter((product)=>(product.inStock==true))


    return(
        <>
        {isInStock.map((product,index)=>(
            <div className="activity">
                <h4>{product.name}</h4>
            <p  key={index}>{product.price}</p>
            <p>{product.inStock}</p>
            <p>{product.id}</p>
            </div>
        ))}
        </>

    )
}