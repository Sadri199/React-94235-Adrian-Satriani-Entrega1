import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ItemListContainer () {
    const id = useParams () //Validar que está fallando 

    const [products, setProducts] = useState()

    const urlAllProducts = "https://dummyjson.com/products"

    const urlProductsByCategory = `https://dummyjson.com/products/category/${id}`
    
    useEffect( () => {
        fetch(id ? urlProductsByCategory : urlAllProducts)
            .then(res => res.json())
            .then(console.log);
        
    },[id]
    )


    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer