import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import { getAllDocs } from "../firebase/db"


function NavBarContainer() {
    const [categoryName , setCategoryName] = useState([])

    
    useEffect( ()=> {
        getAllDocs("categories")
            .then (data => setCategoryName(data))
    }, [])

    return ( 
        <NavBar categoryName={categoryName}/>
     );
}

export default NavBarContainer