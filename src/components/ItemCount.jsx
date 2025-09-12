import { SquarePlus } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert' //Cambiar por toastify
import { useState } from "react"

function ItemCount() {
    const [quantity, setQuantity] = useState (0)
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [disableVariant, setDisableVariant] = useState("danger")
    const [alert, setAlert] = useState()

    const handleClickMinus = () => {
        if (quantity > 0){
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
        setQuantity (quantity +1)
        }
    const handleAlert = () => {

        setAlert(<Alert variant="success" dismissible="true">Product added to cart...just kidding, it doesn't work</Alert>)
    }

    return (
    <div>
        {alert}
        <p>{quantity}</p>
        <Button onClick={handleClickMinus} disable={isButtonDisabled} variant={disableVariant}> - </Button>
        <Button onClick={handleClickPlus} variant={"info"}> + </Button>
        <Button onClick={handleAlert} variant={"success"}>
            <SquarePlus /> Add to Cart
        </Button>
    </div>)
}

export default ItemCount