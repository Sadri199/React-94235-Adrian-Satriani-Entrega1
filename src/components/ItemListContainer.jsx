import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ItemListContainer () {
    const {id} = useParams ()

    const [products, setProducts] = useState([])

    useEffect( () => {
        const urlAllProducts = "https://dummyjson.com/products"
        const urlProductsByCategory = `https://dummyjson.com/products/category/${id}`
        
        setTimeout(()=>
            
            fetch(id ? urlProductsByCategory : urlAllProducts)
                .then(res => res.json())
                .then(data => setProducts(data.products))
            , 500)
        
    },[id]
    )

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer