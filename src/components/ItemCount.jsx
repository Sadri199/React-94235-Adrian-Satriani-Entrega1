import { SquarePlus } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function ItemCount({props}) {
    
        

    return (  
    <div>
        <Button className="mx-2" onClick={props.handleClickMinus} disabled={props.isButtonDisabled} variant={props.disableVariant}> - </Button>
        <Button className="mx-2" onClick={props.handleClickPlus} variant={"info"}> + </Button>
        <Button className="mx-2" onClick={props.handleClickAdd} variant={"success"}>
            <SquarePlus /> Add to Cart
            <Badge className="ms-2" bg="secondary">{props.quantity}</Badge>
        </Button>
    </div>
    )
}

export default ItemCount