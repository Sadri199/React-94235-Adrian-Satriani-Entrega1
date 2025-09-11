import { Button } from "./ui/button"
import { SquarePlus } from "lucide-react"
import { useState } from "react"

function ItemCount() {
    const [quantity, setQuantity] = useState (0)
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [disableVariant, setDisableVariant] = useState("destructive")

    const handleClickMinus = () => {
        if (quantity > 0){
        setQuantity (quantity - 1)
        setButtonDisabled (false)
        setDisableVariant ("destructive")
        }
        else {
            setButtonDisabled (true)
            setDisableVariant ("ghost")
        }
    }
    const handleClickPlus = () => {
        setButtonDisabled (false)
        setDisableVariant ("destructive")
        setQuantity (quantity +1)
        }
    

    return (
    <div>
        <p>{quantity}</p>
        <Button onClick={handleClickMinus} disable={isButtonDisabled} variant={disableVariant}> - </Button>
        <Button onClick={handleClickPlus} variant={"secondary"}> + </Button>
        <Button >
            <SquarePlus /> Add to Cart
        </Button>
    </div>)
}

export default ItemCount