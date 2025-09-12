import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const {id} = useParams ()
    const [product, setProduct] = useState()

    useEffect( () => {
        const urlProduct = `https://dummyjson.com/products/${id}`

        setTimeout(()=>
            fetch(urlProduct)
                .then(res => res.json())
                .then(data => setProduct(data))
            , 3000)
        
    },[id])
    
    return ( 
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer