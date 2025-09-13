import { useState } from "react"
import ItemCount from "./ItemCount";

function ItemCountContainer() {
    const [quantity, setQuantity] = useState (1)
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [disableVariant, setDisableVariant] = useState("danger")

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

    const props = {quantity, isButtonDisabled, disableVariant, handleClickMinus, handleClickPlus}
    return (<ItemCount props={props}/>)
}

export default ItemCountContainer