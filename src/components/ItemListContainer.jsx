import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getAllDocs } from "../firebase/db"

function ItemListContainer () {
    const {id} = useParams ()

    const [products, setProducts] = useState([])

    useEffect( () => {
        getAllDocs("acParts")
            .then(data => setProducts(data))
    },[id]
    )

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer