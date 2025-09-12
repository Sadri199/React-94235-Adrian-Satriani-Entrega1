import { ShoppingBasket } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

function CartWidget (){

    return (
        <div>
        <Button variant="outline-success" size="lg">
          <ShoppingBasket />
          <Badge className="ms-1" bg="secondary">5</Badge>
        </Button>
        </div>
    )
}

export default CartWidget