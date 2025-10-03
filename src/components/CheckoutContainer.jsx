import Checkout from "./Checkout"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { serverTimestamp } from "firebase/firestore"

function CheckoutContainer() {
    const { calcTotal, cart, clearCart } = useContext(CartContext)
    const date = serverTimestamp()

    if(!cart.length){
        return(<div className='d-flex flex-column mt-2 align-items-center justify-content-center'>You shouldn't be here...</div>)
    }

    return (<Checkout cart={cart} calcTotal={calcTotal} date={date} clearCart={clearCart}/>  )
}

export default CheckoutContainer