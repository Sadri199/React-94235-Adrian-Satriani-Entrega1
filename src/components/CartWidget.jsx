import { ShoppingBasket } from "lucide-react"
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router"

function CartWidget (){
    const { calcQuantities } = useContext(CartContext)
    const quantity = calcQuantities()
    const goToCart = useNavigate()

    return (
        <div>
        <Button variant="outline-success" size="lg" onClick={() => goToCart("/cart")}>
          <ShoppingBasket />
          <Badge className="ms-1" bg="secondary">{quantity > 99 ? "99+" : quantity}</Badge>
        </Button>
        </div>
    )
}

export default CartWidget