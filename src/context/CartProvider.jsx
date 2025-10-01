import { CartContext } from "./CartContext"
import { useState } from "react"

function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const addProduct = item => setCart([...cart, item])

    const calcQuantities = () => {
        const quantities = cart.map(item => item.quantity)
        const total = quantities.reduce((acc, current)=> acc + current, 0)
        return total
    }

    return(
        <CartContext.Provider value={{
            addProduct,
            calcQuantities
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider