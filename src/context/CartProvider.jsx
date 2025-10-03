import { CartContext } from "./CartContext"
import { useState } from "react"
import { notifyWarn, 
        notifySuccess,
        notifyClear,
        notifyDelete,
        notifyEdit } from "../toasts/toast"

function CartProvider ({children}){

    const [cart, setCart] = useState([])

    const addProduct = item => {
        if (cart.some(product => product.id === item.id)){
            return notifyWarn()
        }
        setCart([...cart, item])
    notifySuccess(item.quantity, item.name)}

    const calcQuantities = () => {
        const quantities = cart.map(item => item.quantity)
        const total = quantities.reduce((acc, current)=> acc + current, 0)
        return total
    }

    const calcTotal = () => {
        const prices = cart.map(item => item.quantity * item.price)
        const total = prices.reduce((acc, current)=> acc + current, 0)
        return total
    }

    const clearCart = () => {setCart([])
        notifyClear()
    }

    const deleteProduct = (id, name) => {
        const newCart = cart.filter(item => item.id !== id)
        notifyDelete(name)
        setCart (newCart)
    }

    const editProduct = (id, bool, name) => {
        const searchProduct = cart.find (item => item.id === id)
        const newCart = cart.map(item=> {
            if (item.id === id){
                if (bool){
                    return {...item, quantity: searchProduct.quantity +1}
                }
                else{
                    return {...item, quantity: searchProduct.quantity -1}
                }
            }
            return item
        })
        setCart(newCart)
        notifyEdit(name)
    }

    return(
        <CartContext.Provider value={{
            addProduct,
            calcQuantities,
            cart,
            calcTotal,
            clearCart,
            deleteProduct,
            editProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider