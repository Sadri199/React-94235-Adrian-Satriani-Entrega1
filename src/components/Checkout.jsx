import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { postOrder } from "../firebase/db"
import { useNavigate } from 'react-router'


function Checkout({cart, calcTotal, date, clearCart}) {
    const home = useNavigate()
    const handleSubmit = (e) => {
            e.preventDefault()
            const orderData = e.target
            const email = orderData.email.value
            const name = orderData.name.value
            const phone = orderData.phone.value
    
            const orderDetails = {
                client:{email, name, phone},
                grandTotal: calcTotal(),
                products: cart,
                date: date
            }
            const orderSuccess = postOrder(orderDetails)

            if(orderSuccess){
                home("/")
                clearCart()
            }
        }

    return (
        <div className='d-flex flex-column mt-2 align-items-center justify-content-center'>
            <Form className='w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="ibis@silentline.com" required/>
                    <Form.Text className="text-muted">
                    We need your email to send you the electronic bill!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Sera Cross" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="+59899445566" required/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Create your Order!
                </Button>
            </Form>
        </div>
    )
}

export default Checkout