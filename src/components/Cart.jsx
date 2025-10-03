import { ArrowBigRightDash, 
        Trash2, 
        Shredder, 
        DiamondPlus,
        DiamondMinus } from 'lucide-react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from 'react-router'

function Cart({cart, total, clearCart, deleteProduct, editProduct}) {
    const checkout = useNavigate()

    if(cart.length <1){
        return(<div className='d-flex mt-2 justify-content-center'>Your cart is empty, why not add something and return here?</div>)
    }

    return ( 
        <div className='d-flex flex-column mt-2 align-items-center justify-content-center'>
                <ListGroup className='w-50'>
                    {cart.map(product => 
                    <ListGroup.Item key={product.id} className='d-flex align-items-center justify-content-between'>
                        {product.name}  Quantity: {product.quantity} Price: {product.price * product.quantity} C
                        <Button className='btn-sm' variant='secondary' onClick={() => editProduct(product.id, true, product.name)}> <DiamondPlus /> </Button>
                        {product.quantity <=1 ? null :
                        <Button className='btn-sm' variant='secondary' onClick={() => editProduct(product.id, false, product.name)}> <DiamondMinus /> </Button>}
                        <Button className='btn-sm' variant='danger' onClick={() => deleteProduct(product.id, product.name)}> <Shredder /> </Button>
                    </ListGroup.Item>
                    )}
                </ListGroup>
                <h2 className='my-2'>
                    Grand Total: {total} C
                </h2>
                <Button variant='danger' onClick={() => clearCart()}> <Trash2 /> Clear Cart </Button>
                <Button variant="success" className='w-50 mt-3' onClick={() => checkout("/checkout")}> <ArrowBigRightDash /> Checkout</Button>
        </div>
     )
}

export default Cart