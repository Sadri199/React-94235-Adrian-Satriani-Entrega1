import Cart from "./Cart"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartContainer() {
    const {cart, calcTotal, clearCart, deleteProduct, editProduct} = useContext(CartContext)
    const total = calcTotal()

    return ( <Cart cart={cart} 
            total={total} 
            clearCart={clearCart} 
            deleteProduct={deleteProduct}
            editProduct={editProduct}/> )
}

export default CartContainer