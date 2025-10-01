import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getAllDocs, filterProducts } from "../firebase/db"

function ItemListContainer () {
    const {id} = useParams ()

    const [products, setProducts] = useState([])

    useEffect( () => {
        if (id) {
            filterProducts(id)
                .then(data => setProducts(data))
        } else {
            getAllDocs("acParts")
                .then(data => setProducts(data))
        }
    },[id]
    )

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer