import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getSingleProduct } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const {id} = useParams ()
    const [product, setProduct] = useState()

    useEffect( () => {
        getSingleProduct(id)
            .then(data => setProduct(data))
    },[id])
    
    return ( 
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer