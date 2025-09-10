import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ItemDetailContainer() {
    
    const {id} = useParams ()

    const [product, setProduct] = useState()

    useEffect( () => {
        const urlProduct = `https://dummyjson.com/products/${id}`
        
        fetch(urlProduct)
            .then(res => res.json())
            .then(data => setProduct(data.products))
        
    },[id]
    )
    
    return ( 
        <>
        <p>{product}</p>
        </>
    )
}

export default ItemDetailContainer