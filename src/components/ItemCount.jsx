import { SquarePlus } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'  
import { ToastContainer, toast } from 'react-toastify'

function ItemCount({props}) {
    
        const notify = () => toast.success(`Adding ${props.quantity} products to the cart...just kidding`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    return (  
<div>
        <ToastContainer/>
        <Button className="mx-2" onClick={props.handleClickMinus} disabled={props.isButtonDisabled} variant={props.disableVariant}> - </Button>
        <Button className="mx-2" onClick={props.handleClickPlus} variant={"info"}> + </Button>
        <Button className="mx-2" onClick={notify} variant={"success"}>
            <SquarePlus /> Add to Cart
            <Badge className="ms-2" bg="secondary">{props.quantity}</Badge>
        </Button>
    </div>
    )
}

export default ItemCount