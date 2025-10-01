import { ShoppingBasket } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget (){
    const { calcQuantities } = useContext(CartContext)
    const quantity = calcQuantities()

    return (
        <div>
        <Button variant="outline-success" size="lg">
          <ShoppingBasket />
          <Badge className="ms-1" bg="secondary">{quantity > 99 ? "99+" : quantity}</Badge>
        </Button>
        </div>
    )
}

export default CartWidget