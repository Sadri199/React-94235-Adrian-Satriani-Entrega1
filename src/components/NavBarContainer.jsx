import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import { getAllDocs } from "../firebase/db"


function NavBarContainer() {
    const [categoryName , setCategoryName] = useState([])
    const [brandName , setBrandName] = useState([])
    
    useEffect( ()=> {
        getAllDocs("categories")
            .then (data => setCategoryName(data))
        getAllDocs("manufacturers")
            .then (data => setBrandName(data))
    }, [])

    return ( 
        <NavBar categoryName={categoryName} brandName={brandName}/>
     )
}

export default NavBarContainer