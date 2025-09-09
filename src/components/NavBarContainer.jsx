import { useEffect, useState } from "react";
import NavBar from "./NavBar";


function NavBarContainer() {
    const [categoryName , setCategoryName] = useState([])

    useEffect( ()=> {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategoryName(data));

    }, [])

    return ( 
        <NavBar categoryName={categoryName}/>
     );
}

export default NavBarContainer