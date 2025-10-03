import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

function ItemCountContainer({product}) {
    const [quantity, setQuantity] = useState (1)
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const [disableVariant, setDisableVariant] = useState("danger")

    const { addProduct } = useContext(CartContext)

    const handleClickMinus = () => {
        if (quantity > 1){
        setQuantity (quantity - 1)
        setButtonDisabled (false)
        setDisableVariant ("danger")
        }
        else {
            setButtonDisabled (true)
            setDisableVariant ("dark")
        }
    }

    const handleClickPlus = () => {
        setButtonDisabled (false)
        setDisableVariant ("danger")
        setQuantity (quantity + 1)
        }
    
    const handleClickAdd = () => {
        addProduct({...product, quantity})
    }
    const props = {quantity, 
                    isButtonDisabled, 
                    disableVariant, 
                    handleClickMinus, 
                    handleClickPlus,
                    handleClickAdd}
    return (<ItemCount props={props}/>)
}

export default ItemCountContainer